<div align="center">
  <img width="320" src="https://raw.githubusercontent.com/epilande/gatsby-theme-auth0/master/demos/gatsby-theme-shared-ui/src/GatsbyAuth0.svg?sanitize=true">
  <h1>gatsby-theme-auth0 🔐</h1>
</div>

<p align="center">
  <strong>A Gatsby theme for adding Auth0 to your application.</strong>
</p>

[![GitHub](https://img.shields.io/github/license/epilande/gatsby-theme-auth0?style=flat-square)](https://github.com/epilande/gatsby-theme-auth0/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gatsby-theme-auth0?style=flat-square)](https://www.npmjs.com/package/gatsby-theme-auth0)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c495103e-b0fc-4378-adea-9845c8c1476c/deploy-status)](https://app.netlify.com/sites/gatsby-theme-auth0/deploys)

## What's in the box?

- 💯 Easy to set up authentication.
- 🔑 SSO. Try it out with [demo1](https://gatsby-theme-auth0.netlify.com/) & [demo2](https://gatsby-theme-auth0-custom.netlify.com/).
- 🔋 Batteries included: [`AuthService`](https://github.com/epilande/gatsby-theme-auth0/blob/master/gatsby-theme-auth0/src/auth/service.ts) & [`useAuth`](https://github.com/epilande/gatsby-theme-auth0/blob/master/gatsby-theme-auth0/src/hooks/useAuth.ts).
- 🤙 [`/auth/callback`](https://github.com/epilande/gatsby-theme-auth0/blob/master/gatsby-theme-auth0/src/pages/auth/callback.tsx) page automatically set up. Configurable via [`callbackPath`](#theme-options)
- 🎨 Fully customizable & extendable.

## Installation

```sh
$ npm install --save gatsby-theme-auth0
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        // callbackPath: "/auth/callback", // Optional
      },
    },
  ],
};
```

Set up your login/logout buttons and you're good to go!

```jsx
import React from "react";
import { AuthService, useAuth } from "gatsby-theme-auth0";

export default () => {
  const { isLoggedIn, profile } = useAuth();
  return (
    <div>
      {profile && <p>Hello {profile.name}</p>}
      {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
    </div>
  );
};
```

### Theme options

| Key            | Default                  | Required | Description                     |
| -------------- | ------------------------ | -------- | ------------------------------- |
| `domain`       |                          | `true`   | Configure Auth0 `Domain`        |
| `clientID`     |                          | `true`   | Configure Auth0 `Client ID`     |
| `redirectUri`  |                          | `true`   | Configure Auth0 `Callback URL`  |
| `audience`     |                          | `false`  | Configure Auth0 `Audience`      |
| `responseType` | `"token id_token"`       | `false`  | Configure Auth0 `Response Type` |
| `scope`        | `"openid email profile"` | `false`  | Configure Auth0 `Scope`         |
| `callbackPath` | `"/auth/callback"`       | `false`  | Change callback URL path        |

## Shadowing

Gatsby Themes has a concept called [**Shadowing**](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/), which allows users to override a file in a gatsby theme. This allows the theme to be fully customizable.

To start shadowing, create a folder with the theme name `gatsby-theme-auth0` in your project's `src` directory.

Now you're able to override any file in the theme. For example, if you want to override the `callback` component, create a file:

```sh
src/gatsby-theme-auth0/components/callback.js
```

Here's a demo of that [`demos/custom/src/gatsby-theme-auth0/components/callback.js`](https://github.com/epilande/gatsby-theme-auth0/blob/master/demos/custom/src/gatsby-theme-auth0/components/callback.tsx)

## Demos

- **Minimal:** [Demo](https://gatsby-theme-auth0.netlify.com/) | [Code](https://github.com/epilande/gatsby-theme-auth0/tree/master/demos/minimal)
- **Custom:** [Demo](https://gatsby-theme-auth0-custom.netlify.com/) | [Code](https://github.com/epilande/gatsby-theme-auth0/tree/master/demos/custom)

## Dev

### Set up env variables

Go to demo application directory, copy the `.env.example` -> `.env.development`. Fill in the required environment variables before starting up the client dev server.

### Available Scripts

#### `$ yarn dev`

This will run the demo app in development mode using `.env.development`.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `$ yarn build`

This will build the demo app for production using `.env.production`.

Outputs to the `demo/public` folder.
