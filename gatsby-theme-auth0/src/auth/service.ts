import * as auth0 from "auth0-js";
import { navigate } from "gatsby";

const isBrowser = typeof window !== "undefined";

export interface SessionState {
  isLoggedIn: boolean;
  accessToken?: string;
}

class Auth {
  private accessToken?: string;
  private userProfile?: auth0.Auth0UserProfile;

  public sessionStateCallback = (_state: SessionState) => {};

  private auth0 = process.env.AUTH0_DOMAIN
    ? new auth0.WebAuth({
        domain: process.env.AUTH0_DOMAIN!,
        clientID: process.env.AUTH0_CLIENT_ID!,
        redirectUri: process.env.AUTH0_CALLBACK_URL!,
        audience: process.env.AUTH0_AUDIENCE!,
        responseType: process.env.AUTH0_RESPONSE_TYPE! || "token id_token",
        scope: process.env.AUTH0_SCOPE! || "openid email profile",
      })
    : undefined;

  public login = () => {
    if (!isBrowser) return;
    // Save postLoginUrl so we can redirect user back to where they left off after login screen
    localStorage.setItem("postLoginUrl", window.location.pathname);
    this.auth0 && this.auth0.authorize();
  };

  public handleAuthentication = () =>
    new Promise((resolve, reject) => {
      this.auth0 &&
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);

            const postLoginUrl = localStorage.getItem("postLoginUrl");
            localStorage.removeItem("postLoginUrl");
            if (postLoginUrl) {
              navigate(postLoginUrl);
            }
            return resolve(authResult);
          } else if (err) {
            return reject(err);
          }
          return resolve();
        });
    });

  public getAccessToken = () => this.accessToken;

  public getUserProfile = () => this.userProfile;

  private setSession(authResult: auth0.Auth0DecodedHash) {
    if (!isBrowser) return;
    localStorage.setItem("isLoggedIn", "true");
    this.accessToken = authResult.accessToken;
    this.userProfile = authResult.idTokenPayload;
    this.sessionStateCallback({
      isLoggedIn: true,
      accessToken: this.accessToken,
    });
  }

  public checkSession = () =>
    new Promise(resolve => {
      this.auth0 &&
        this.auth0.checkSession({}, (err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            return resolve(authResult);
          }
          if (err && err.error === "login_required") {
            // User has been logged out from Auth0 server.
            // Remove local session.
            this.localLogout();
          }
          return resolve();
        });
    });

  public localLogout = () => {
    if (!isBrowser) return;
    // Remove tokens and user profile
    this.accessToken = undefined;
    this.userProfile = undefined;

    localStorage.removeItem("isLoggedIn");
    this.sessionStateCallback({
      isLoggedIn: false,
      accessToken: undefined,
    });
  };

  public logout = () => {
    if (!isBrowser) return;
    this.localLogout();
    this.auth0 &&
      this.auth0.logout({
        returnTo: window.location.origin,
      });
  };

  public isAuthenticated = () => {
    if (!isBrowser) return false;
    return localStorage.getItem("isLoggedIn") === "true";
  };
}

const auth = new Auth();

export default auth;
