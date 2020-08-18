const dir = `${__dirname}/..`;

module.exports = [
  "gatsby-plugin-root-import",
  {
    resolve: "gatsby-plugin-material-ui",
    options: {
      stylesProvider: {
        injectFirst: true,
      },
    },
  },
  {
    resolve: "gatsby-plugin-prefetch-google-fonts",
    options: {
      fonts: [
        {
          family: "Roboto",
        },
        {
          family: "Work Sans",
          variants: ["800"],
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${dir}/content/publications`,
      name: `publications`,
    },
  },
];
