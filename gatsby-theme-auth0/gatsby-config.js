module.exports = () => ({
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
});
