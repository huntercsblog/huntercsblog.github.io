import React from "react";
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby";
import Layout from "src/layout";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  divider: {
    background: theme.palette.text.secondary,
  },
}));

const Index = () => {
  const classes = useStyles();

  const recent = useStaticQuery(graphql`
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
      {recent.map((elem, i) => (
        <React.Fragment key={i}>
          <Link
            to={`articles/${recent[i].node.fields.slug}`}
            component={GatsbyLink}
            color="inherit"
            className={classes.link}
          >
            <Typography variant="h5" color="textSecondary">
              {recent[i].node.frontmatter.title}
            </Typography>
            <Typography variant="h6">
              {recent[i].node.frontmatter.date} &middot;{" "}
              {recent[i].node.timeToRead} min
            </Typography>
            {recent[i].node.excerpt}
            {i !== recent.length - 1 && (
              <Divider variant="middle" className={classes.divider} />
            )}
          </Link>
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Index;
