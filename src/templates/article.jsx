import React, {Fragment} from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

import SEO from "src/components/SEO";
import TagChip from "src/components/tagchip";
import Layout from "src/layout";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  link: {
    color: theme.palette.text.secondary,
    verticalAlign: "center",
  },
  chips: {
    marginRight: theme.spacing(1),
  },
  main: {
    "& a": {
      color: theme.palette.text.secondary,
    }
  },
}));

const Article = ({ data, pageContext }) => {
  const { frontmatter, body, timeToRead } = data.mdx;
  const classes = useStyles();
  const related = [];
  if(pageContext.prev) related.push(pageContext.prev);
  if(pageContext.next) related.push(pageContext.next);
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
            <Avatar alt={a.display_name} src={a.image} title={a.display_name}>{a.username.substring(0,1)}</Avatar>
          )}
          </div>
        </Grid>
        {/*Author Names/Links*/}
        <Grid item>
          <Typography variant="subtitle1">
            By {frontmatter.authors.map((a, index, array) => 
              <Fragment>
                <Link component={GatsbyLink} to={`/author/${a.username}`} className={classes.link}>
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
      <Typography variant="subtitle1">
        <time>{frontmatter.date}</time>&nbsp;&middot;&nbsp;{timeToRead + " min read"}
      </Typography>
      <div className={classes.main}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      {/*Article Tags*/}
      <p>
        Tagged: {frontmatter.tags.map(tag => 
          <TagChip className={classes.chips} name={tag} label={tag} />
        )}
      </p>
      {/* Links to other articles */}
      <Grid container justify="space-between">
        <Grid item>
          {pageContext.prev && (
            <Grid container alignItems="center">
              <ArrowBackIcon />
              <Link to={`/articles/${pageContext.prev.node.fields.slug}`} component={GatsbyLink} className={classes.link}>
                {pageContext.prev.node.frontmatter.title}
              </Link>
            </Grid>
          )}
        </Grid>
        <Grid item>
          {pageContext.next && (
            <Grid container alignItems="center">
              <Link to={`/articles/${pageContext.next.node.fields.slug}`} component={GatsbyLink} className={classes.link}>
                {pageContext.next.node.frontmatter.title}
              </Link>
              <ArrowForwardIcon />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
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
