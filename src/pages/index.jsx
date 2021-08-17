import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import Pagination from "../src/components/pagination.jsx"

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
      <Pagination numPages = "2" />
      <SubscribeButton />
    </Layout>
  );
};

export default Index;
