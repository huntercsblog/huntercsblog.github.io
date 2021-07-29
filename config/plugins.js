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
    resolve: 'gatsby-plugin-local-search',
    options: {
      // A unique name for the search index. This should be descriptive of
      // what the index contains. This is required.
      name: 'pages',

      // Set the search engine to create the index. This is required.
      // The following engines are supported: flexsearch, lunr
      engine: 'flexsearch',

      // Provide options to the engine. This is optional and only recommended
      // for advanced users.
      //
      // Note: Only the flexsearch engine supports options.
      engineOptions: 'speed',

      // GraphQL query used to fetch all data for the search index. This is
      // required.
      query: `
        {
          allMdx (
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            nodes {
              id
              body
              excerpt(truncate: true, pruneLength: 300)
              timeToRead
              frontmatter {
                tags
                title
                humanDate: date(formatString: "MMM Do, YYYY")
                authors {
                  display_name
                }
              }
              fields {
                slug
              }
            }
          }
        }
      `,

      // Field used as the reference value for each document.
      // Default: 'id'.
      ref: 'slug',

      // List of keys to index. The values of the keys are taken from the
      // normalizer function below.
      // Default: all fields
      //authors don't work in search right now
      index: ['title', 'body', 'tags', 'humanDate', 'authors', 'timeToRead'],

      // List of keys to store and make available in your UI. The values of
      // the keys are taken from the normalizer function below.
      // Default: all fields
      store: ['title', 'slug', 'humanDate', 'excerpt', 'timeToRead'],

      // Function used to map the result from the GraphQL query. This should
      // return an array of items to index in the form of flat objects
      // containing properties to index. The objects must contain the `ref`
      // field above (default: 'id'). This is required.
      normalizer: ({ data }) =>
        data.allMdx.nodes.map((node) => ({
          path: node.frontmatter.path,
          title: node.frontmatter.title,
          body: node.body,
          excerpt: node.excerpt,
          slug: node.fields.slug,
          tags: node.frontmatter.tags,
          authors: node.frontmatter.authors,
          humanDate: node.frontmatter.humanDate,
          timeToRead: node.timeToRead,
        })),
    },
  },
  /*{
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
  },*/
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: "±",
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {"c++": "cpp", "js": "javascript"},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in gatsby-browser.js
            // right after importing the prism color scheme:
            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax in blocks
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
          },
        },
      ],
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
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${dir}/content/authors`,
      name: `authors`,
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
  {
    resolve: "gatsby-plugin-sitemap",
    options: {
      exclude: ["/404.html", "/tag/*"],
    },
  },
  {
    resolve: "gatsby-plugin-disqus",
    options: {
      shortname: "the-icarus"
    }
  },
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ["G-678SPSLDGC"],
    }
  },
];
