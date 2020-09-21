import React, {Fragment} from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SEO from "src/components/SEO";
import Layout from "src/layout";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  chips: {
    marginRight: theme.spacing(1),
  },
}));

const Article = ({ data, pageContext }) => {
  const { frontmatter, body, timeToRead } = data.mdx;
  const classes = useStyles();
  return (
    <Layout>
      <SEO 
        title={frontmatter.title} 
        description={body.substring(0,140).replace(/^#.*?$/gm, "")} 
        article={true} 
      />
      {/*Title*/}
      <Typography variant="h3">{frontmatter.title}</Typography>
      {/*Authors*/}
      <Grid container alignItems="center">
        {/*Author Pictures*/}
        <Grid item>
          <div className={classes.avatarContainer}>
          {frontmatter.authors.map(a => 
            <Avatar alt={a.display_name} src={a.image}>{a.username}</Avatar>
          )}
          </div>
        </Grid>
        {/*Author Names/Links*/}
        <Grid item>
          <Typography variant="subtitle1">
            By {frontmatter.authors.map((a, index, array) => 
              <Fragment>
                <Link component={GatsbyLink} to={`/author/${a.username}`}>
                  {a.display_name}
                </Link>
                {index === array.length-2 && " and "}
                {index < array.length-2 && ", "}
              </Fragment>
            )}
          </Typography>
        </Grid>
      </Grid>
      {/*Date Published*/}
      <Typography variant="subtitle1" component="time">
        {" " + frontmatter.date + " "}&middot;{" " + timeToRead + " min read"}
      </Typography>
      <MDXRenderer>{body}</MDXRenderer>
      {pageContext.prev && (
        <Link to={`/articles/${pageContext.prev.node.fields.slug}`} component={GatsbyLink}>
          <Fragment>
            {"<--"}
            {pageContext.prev.node.frontmatter.title}
          </Fragment>
        </Link>
      )}
      {pageContext.next && (
        <Link to={`/articles/${pageContext.next.node.fields.slug}`} component={GatsbyLink}>
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
        date(formatString: "MMMM Do, YYYY")
        authors {
          username
          display_name
          image
        }
      }
      timeToRead
      body
    }
  }
`;

export default Article;
