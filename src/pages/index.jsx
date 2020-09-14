import React from "react";
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby";
import Layout from "src/layout";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  divider: {
    background: theme.palette.text.secondary,
  },
  article: {
    "& ~ *": {
      "border-top": `1px solid ${theme.palette.text.secondary}`,
    },
  },
}));

const Index = () => {
  const classes = useStyles();

  const recent = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "publications" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
            excerpt(truncate: true, pruneLength: 400)
            timeToRead
          }
        }
      }
    }
  `).allMdx.edges;

  return (
    <Layout>
      <Typography variant="h4" align="center">
        Latest News
      </Typography>
      {recent.map((_, i) => (
        <Box component={Card} my={1}>
          <CardActionArea component={GatsbyLink} to={`/articles/${recent[i].node.fields.slug}`}>
            <CardContent>
              <Typography variant="h5" color="textSecondary">
                {recent[i].node.frontmatter.title}
              </Typography>
              <Typography variant="h6">
                {recent[i].node.frontmatter.date} &middot;{" "}
                {recent[i].node.timeToRead} min
              </Typography>
              {recent[i].node.excerpt}
            </CardContent>
          </CardActionArea>
        </Box>
      ))}
    </Layout>
  );
};

export default Index;
