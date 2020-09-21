import React from "react";
import { graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import SEO from "src/components/SEO";
import ArticleList from "src/components/article-list";
import Layout from "src/layout";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(1),
  },
  chips: {
    marginRight: theme.spacing(1),
  },
}));

const AuthorPage = ({ data, pageContext }) => {
  const classes = useStyles();
  const { totalCount } = data.articles;
  const howMany = totalCount > 0? "Articles" : "No articles yet";
  const my = data.my;
  return (
    <Layout>
      <SEO title={my.display_name} description={my.description} />
      <Box mb={2} p={2} component={Paper}>
        <Grid container>
          <Grid item>
            <Avatar 
              alt={my.display_name} 
              src={my.image} 
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4">
              {my.display_name}
            </Typography>
            {my.badges.map((badge, index) => (
              <Chip label={badge} className={classes.chips} key={index} />
            ))}
            <Chip label={totalCount + " articles"} className={classes.chips} />
            <p>{my.description}</p>
          </Grid>
        </Grid>
      </Box>

      <ArticleList articles={data.articles.edges} title={howMany} />

    </Layout>
  );
};

//https://weknowinc.com/blog/how-add-support-multiple-authors-page-gatsbyjs
// ^ tutorial on one-to-many relationships in GraphQL
export const query = graphql`
  query($username: String) {
    articles: allMdx(
      filter: {
        frontmatter: {authors: {elemMatch: {username: {eq: $username}}}}
        fields: { collection: { eq: "publications" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            humanDate: date(formatString: "MMM Do, YYYY")
            datetime: date(formatString: "YYYY-MM-DD")
          }
          excerpt(truncate: true, pruneLength: 300)
          timeToRead
        }
      }
    }
    my: authorsJson(username: { eq: $username }) {
      username
      description
      display_name
      image
      badges
    }
  }`;

export default AuthorPage;
