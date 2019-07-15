module.exports = options => {
  console.log("options: ", options);

  return {
    plugins: [
      "gatsby-plugin-typescript",
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
    ],
  };
};
