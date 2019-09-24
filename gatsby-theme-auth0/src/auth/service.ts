import * as auth0 from "auth0-js";
import { config } from "./config";
import { AnonymousUser, User, LoggedInUser, AuthTokens } from "./user";

const isBrowser = typeof window !== "undefined";

export type AuthCallback = (state: User) => void;

class Auth {
  private auth0: auth0.WebAuth | undefined =
    process.env.AUTH0_DOMAIN && isBrowser
      ? new auth0.WebAuth(config)
      : undefined;

  /**
   * Handle the auth callback page. Checks the hash from the browser location, parses
   * the user data and returns that in a promise
   * @returns {Promise<User>} a Promise with the current user
   */
  public handleAuthentication = (): Promise<User> => {
    return new Promise((resolve, reject) => {
      this.auth0
        ? this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              const user = this.userFromAuthResult(authResult);
              return resolve(user);
            } else if (err) {
              return reject(err);
            }
            return resolve();
          })
        : resolve(AnonymousUser);
    });
  };

  /**
   * Refresh the user's auth0 session (if their browser claims that they are logged in).
   * @returns {Promise<User>} a Promise with the current user
   */
  public checkSession = (): Promise<User> => {
    return new Promise((resolve, reject) => {
      console.log("here", this);
      this.auth0 && this.isAuthenticated()
        ? this.auth0.checkSession({}, (err, authResult) => {
            if (err) reject(err);
            if (authResult && authResult.accessToken && authResult.idToken) {
              const user = this.userFromAuthResult(authResult);
              resolve(user);
            }
            if (err && err.error === "login_required") {
              // User has been logged out from Auth0 server.
              // Remove local session.
              this.localLogout();
              resolve(AnonymousUser);
            }
          })
        : resolve(AnonymousUser);
    });
  };

  /**
   * Turn an incoming auth0 hash from your callback into a user object.
   * @param authResult The auth result
   * @returns {User}
   */
  private userFromAuthResult(authResult: auth0.Auth0DecodedHash): User {
    if (!isBrowser) return AnonymousUser;
    if (
      !authResult ||
      !authResult.accessToken ||
      !authResult.idToken ||
      !authResult.expiresIn
    ) {
      return AnonymousUser;
    } else {
      const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      const tokens: AuthTokens = {
        accessToken: authResult.accessToken,
        idToken: authResult.idToken,
        expiresAt,
      };
      const user: LoggedInUser = {
        isLoggedIn: true,
        profile: authResult.idTokenPayload,
        tokens: tokens,
      };
      localStorage.setItem("isAuthenticated", "true");
      return user;
    }
  }

  /**
   * Begin the auth0 login flow.
   *
   * Sets browser to return to the current page after login (via localStorage).
   * TODO: consider whether this can be handled via the callback route (eg auth0 returnTo param)
   *   and whether `window.location.pathname` will work correctly for urls with a hash or query string
   */
  public login = () => {
    if (!isBrowser) return;
    // Save postLoginUrl so we can redirect user back to where they left off after login screen
    localStorage.setItem("postLoginUrl", window.location.pathname);
    this.auth0 && this.auth0.authorize();
  };

  /**
   * Log out, both locally and on auth0. Redirects to home.
   */
  public logout = () => {
    if (!isBrowser) return;
    this.localLogout();
    this.auth0 &&
      this.auth0.logout({
        returnTo: window.location.origin,
      });
  };

  /**
   * Whether the browser _thinks_ that this user is authenticated.
   */
  public isAuthenticated = () => {
    if (!isBrowser) return false;
    return localStorage.getItem("isAuthenticated") === "true";
  };

  /**
   * Tell the browser (localStorage) to _stop_ considering this user authenticated.
   */
  private localLogout = () => {
    if (!isBrowser) return;
    localStorage.removeItem("isAuthenticated");
  };
}

const auth = new Auth();

export default auth;
