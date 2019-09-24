interface BaseUser {
  isLoggedIn: boolean;
  profile?: auth0.Auth0UserProfile;
  tokens: Tokens;
}

export interface AuthTokens {
  accessToken: string;
  idToken: string;
  expiresAt: number;
}

export type Tokens = {} | AuthTokens;

export type User = LoggedInUser | LoggedOutUser;

export interface LoggedInUser extends BaseUser {
  isLoggedIn: true;
  profile: auth0.Auth0UserProfile;
  tokens: AuthTokens;
}

export interface LoggedOutUser extends BaseUser {
  isLoggedIn: false;
  tokens: {};
}

/** The only LoggedOutUser, the AnonymousUser */
export const AnonymousUser: LoggedOutUser = {
  isLoggedIn: false,
  tokens: {},
};
