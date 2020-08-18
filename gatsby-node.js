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

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/article.jsx");

  const res = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
    }
  `);
  const documents = res.data.allMdx.edges;

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
};
