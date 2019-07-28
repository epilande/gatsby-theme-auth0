import * as React from "react";
import { AuthService, useAuth } from "gatsby-theme-auth0";

const HomePage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  if (isLoading) {
    return <p>Session loading...</p>;
  }

  return (
    <div>
      <h1>
        Demo for <code>gatbsy-theme-auth0</code>
      </h1>
      {profile && <p>Hello {profile.name}</p>}
      {isLoggedIn && <button onClick={AuthService.logout}>Logout</button>}
      {!isLoggedIn && <button onClick={AuthService.login}>Login</button>}
    </div>
  );
};

export default HomePage;
