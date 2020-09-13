const path = require("path");
const moment = require("moment");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const dateSlug = moment(node.frontmatter.date).format("YYYY/MM/DD");
    const file = path.basename(
      node.fileAbsolutePath,
      path.extname(node.fileAbsolutePath)
    );
    const fileSlug =
      file === "index"
        ? path.basename(path.dirname(node.fileAbsolutePath))
        : file;
    createNodeField({ node, name: "slug", value: `${dateSlug}/${fileSlug}` });
  }
};

/**
 * Transforms any string into a URL-safe path component. Spaces replaced with
 * dashes, and everything else is URI encoded (%XX). The url is lower-cased.
 * @param url {string}  arbitrary text
 * @return {string}     URL-safe string
 */
const normalizeURL = (url) => encodeURIComponent(url.replace(/ /g, "-").toLowerCase());

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/article.jsx");
  const tagsTemplate = path.resolve("./src/templates/tag.jsx");

  const res = await graphql(`
    {
      articles: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  /* Create a page for each article */
  const documents = res.data.articles.edges;

  documents.forEach(({ node }, index) => {
    const prev = index === documents.length - 1 ? null : documents[index + 1];
    const next = index === 0 ? null : documents[index - 1];

    createPage({
      component: articleTemplate,
      path: `/articles/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        prev,
        next,
      },
    });
  });

  /* Create a page for each tag */
  const tags = res.data.tags.group;
  tags.forEach((tag) => {
    createPage({
      component: tagsTemplate,
      path: `/tag/${normalizeURL(tag.fieldValue)}`,
      context: {
        tag: tag.fieldValue,
      }
    });
  })
};
