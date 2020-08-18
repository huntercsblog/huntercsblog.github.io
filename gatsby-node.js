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
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  res.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/articles/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
