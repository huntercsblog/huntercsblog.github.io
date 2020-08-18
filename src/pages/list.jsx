import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "src/layout";

const List = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Articles</h1>
      <h3>Entries:</h3>
      <ol>
        {data.allMdx.edges.map((article) => (
          <li key={article.node.fields.slug}>
            <Link to={`/articles/${article.node.fields.slug}`}>
              <h4>{article.node.frontmatter.title}</h4>
            </Link>
            <p>{article.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default List;
