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
  "gatsby-transformer-json",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${dir}/content/tags`,
      name: `tags`,
    },
  },
  {
    resolve: "gatsby-plugin-feed",
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + "/articles/" + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + "/articles/" + edge.node.fields.slug,
              })
            })
          },
          //date(formatString: "ddd, DD MMM YYYY ZZ") automatically done by plugin
          query: `
            {
              allMdx(sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                  node {
                    excerpt(truncate: true, pruneLength: 400)
                    timeToRead
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "The Icarus' Main Feed",
          match: "^/articles/",
        },
      ],
    },
  },
  "gatsby-plugin-react-helmet",
];
