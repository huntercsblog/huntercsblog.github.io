import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import SubscribeButton from "../components/SubscribeButton";
import Grid from '@material-ui/core/Grid'

// Index for homepage layout
const Index = () => {
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
              tags
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

  /**
   * Gets the 2 most recent articles with the 'name' tag that aren't the 3 most recent articles
   * @param name {string}   tag name
   * @return {string}       the 2 most recent articles with the 'name' tag
   */
  const getTaggedArticles = (name) => {
    return recent.slice(3).filter(edge => edge.node.frontmatter.tags.some(tag => tag === name)).slice(0, 2);
  }
  
  return (
    <Layout>
      {/* 3 featured articles at the top */}
      <ArticleList articles={recent.slice(0, 3)} title="Latest News" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <ArticleList articles={getTaggedArticles("Hunter")} title="Hunter" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ArticleList articles={getTaggedArticles("Tech")} title="Tech" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ArticleList articles={getTaggedArticles("NYC")} title="NYC" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ArticleList articles={getTaggedArticles("Daedalus")} title="Daedalus" />
        </Grid>
      </Grid>
      <SubscribeButton />
    </Layout>
  );
};

export default Index;
