exports.onCreateWebpackConfig = ({ plugins, actions }, options) => {
  const {
    domain,
    clientID,
    redirectUri,
    audience,
    responseType,
    scope,
  } = options;

  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env": {
          AUTH0_DOMAIN: JSON.stringify(domain),
          AUTH0_CLIENT_ID: JSON.stringify(clientID),
          AUTH0_CALLBACK_URL: JSON.stringify(redirectUri),
          AUTH0_AUDIENCE: JSON.stringify(audience),
          AUTH0_RESPONSE_TYPE: JSON.stringify(responseType),
          AUTH0_SCOPE: JSON.stringify(scope),
        },
      }),
    ],
  });
};
