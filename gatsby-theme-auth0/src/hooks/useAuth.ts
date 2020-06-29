import * as React from "react";
import auth, { SessionState } from "../auth/service";

const useAuth = (stateCallback = (_state: SessionState) => {}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(auth.isAuthenticated());
  const [profile, setProfile] = React.useState(auth.getUserProfile());

  React.useEffect(() => {
    // Override `sessionStateCallback` in auth service
    auth.sessionStateCallback = state => {
      stateCallback(state);
      setIsLoggedIn(state.isLoggedIn);
    };

    (async () => {
      let profile = auth.getUserProfile();
      // If it's past the expiration date of the token, checkSession()
      if (!profile || Date.now() > profile.exp * 1000) {
        console.debug(`useAuth.useEffect calling checkSession()`);
        await auth.checkSession();
        profile = auth.getUserProfile();
      }
      setProfile(profile);
      setIsLoading(false);
    })();

    return () => {
      // Clean up sessionStateCallback
      auth.sessionStateCallback = () => {};
    };
  }, []);

  return {
    isLoading,
    isLoggedIn,
    profile,
  };
};

export default useAuth;
