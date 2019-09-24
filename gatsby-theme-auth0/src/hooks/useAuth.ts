import * as React from "react";
import { SessionContext } from "../components/SessionProvider";

interface CompactAuth {
  isLoading: boolean;
  isLoggedIn: boolean;
  profile?: auth0.Auth0UserProfile;
}

/**
 * React hook for authentication: Fetches the current logged-in state from the Session context provider
 * Returns the current session loading state, whether the user is logged in, and their profile.
 */
const useAuth = (): CompactAuth => {
  const {
    isLoading,
    user: { isLoggedIn, profile },
  } = React.useContext(SessionContext);

  return { isLoading, isLoggedIn, profile };
};

export default useAuth;
