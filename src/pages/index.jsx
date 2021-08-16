import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import Grid from "@material-ui/core/Grid";
import SubscribeButton from "../components/SubscribeButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../assets/styles/pagination.css";

const Index = () => {
  const recent = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "publications" } } }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              title
              humanDate: date(formatString: "MMM Do, YYYY")
              datetime: date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
            excerpt(truncate: true, pruneLength: 300)
            timeToRead
          }
        }
      }
    }
  `).allMdx.edges;

  return (
    <Layout>
      <ArticleList articles={recent} title="Latest News" />
      <Grid container justify="flex-end">
        <Grid item>
          <Grid container alignItems="center">
            <Link to = "/2" id = "next">Next Page</Link>
            <ArrowForwardIcon />
          </Grid>
        </Grid>
      </Grid>
      <SubscribeButton />
    </Layout>
  );
};

export default Index;
