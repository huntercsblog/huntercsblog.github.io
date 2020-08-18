import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "src/layout";

const Article = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  console.log(pageContext);
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {pageContext.prev && (
        <Link to={`/articles/${pageContext.prev.node.fields.slug}`}>
          <>
            {"<--"}
            {pageContext.prev.node.frontmatter.title}
          </>
        </Link>
      )}
      {pageContext.next && (
        <Link to={`/articles/${pageContext.next.node.fields.slug}`}>
          <>
            {"-->"}
            {pageContext.next.node.frontmatter.title}
          </>
        </Link>
      )}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
    }
  }
`;

export default Article;
