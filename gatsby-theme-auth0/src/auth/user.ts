interface BaseUser {
  isLoggedIn: boolean;
  userProfile?: auth0.Auth0UserProfile;
  tokens: Tokens;
}

export interface Tokens {
  accessToken?: string;
  idToken?: string;
  expiresAt?: number;
}

export type User = LoggedInUser | LoggedOutUser;

export interface LoggedInUser extends BaseUser {
  isLoggedIn: true;
  userProfile: auth0.Auth0UserProfile;
}

export interface LoggedOutUser extends BaseUser {
  isLoggedIn: false;
}

/** The only LoggedOutUser, the AnonymousUser */
export const AnonymousUser: LoggedOutUser = {
  isLoggedIn: false, // todo: necessary?
  tokens: {},
};

/**
 * Check whether the user is logged in and narrow their `User` object
 * into a LoggedInUser
 * @export
 * @param {User} u
 * @returns {u is LoggedInUser}
 */
export function isLoggedInUser(u: User): u is LoggedInUser {
  return typeof u.tokens.accessToken === "string";
}
