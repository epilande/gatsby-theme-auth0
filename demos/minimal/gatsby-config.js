require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
      },
    },
  ],
  siteMetadata: {
    title: "Demo 1",
    source:
      "https://github.com/epilande/gatsby-theme-auth0/tree/master/demos/minimal",
  },
};
