const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-theme-shared-ui",
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
        responseType: "token id_token",
        scope: "openid profile",
        callbackPath: "/awesome-callback",
      },
    },
  ],
  siteMetadata: {
    title: "Demo 2",
    source:
      "https://github.com/epilande/gatsby-theme-auth0/tree/master/demos/custom",
  },
};
