import React, {Fragment} from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Typography from "@material-ui/core/Typography";

import SEO from "src/components/SEO";
import Layout from "src/layout";

const Article = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  console.log(pageContext);
  return (
    <Layout>
      <SEO 
        title={frontmatter.title} 
        description={body.substring(0,140).replace(/^#.*?$/gm, "")} 
        article={true} 
      />
      <Typography variant="h1">{frontmatter.title}</Typography>
      <Typography variant="subtitle1">{frontmatter.date}</Typography>
      <MDXRenderer>{body}</MDXRenderer>
      {pageContext.prev && (
        <Link to={`/articles/${pageContext.prev.node.fields.slug}`}>
          <Fragment>
            {"<--"}
            {pageContext.prev.node.frontmatter.title}
          </Fragment>
        </Link>
      )}
      {pageContext.next && (
        <Link to={`/articles/${pageContext.next.node.fields.slug}`}>
          <Fragment>
            {"-->"}
            {pageContext.next.node.frontmatter.title}
          </Fragment>
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
