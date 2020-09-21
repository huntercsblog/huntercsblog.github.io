import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {graphql, Link as GatsbyLink} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
import SEO from "src/components/SEO";
import Layout from "src/layout";


const NavLink = (props) => (
  <Link
    to={props.to}
    component={GatsbyLink}
    color="textSecondary"
    noWrap
    variant="body"
  >
    {props.children}
  </Link>
);

const Article = ({data, pageContext}) => {
  const {frontmatter, body} = data.mdx;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={body.substring(0, 140).replace(/^#.*?$/gm, "")}
        article={true}
      />
      <Typography variant="h1">{frontmatter.title}</Typography>
      <Typography variant="subtitle1">{frontmatter.date}</Typography>
      <MDXRenderer>{body}</MDXRenderer>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {pageContext.prev && (
            <NavLink to={`/articles/${pageContext.prev.node.fields.slug}`}>
              <Typography color="textSecondary">
                <ArrowBackIcon fontSize="inherit" />
                {pageContext.prev.node.frontmatter.title}
              </Typography>
            </NavLink>
          )}
        </Box>
        <Box>
          {pageContext.next && (
            <NavLink to={`/articles/${pageContext.next.node.fields.slug}`}>
              <Typography color="textSecondary">
                {pageContext.next.node.frontmatter.title}
                <ArrowForwardIcon fontSize="inherit" />
              </Typography>
            </NavLink>
          )}
        </Box>
      </Box>
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
