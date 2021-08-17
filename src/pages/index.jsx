import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import SubscribeButton from "../components/SubscribeButton";
import Pagination from "../components/pagination.jsx";

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
      {/*pagination component, have to find a way to automatically get numPages*/}
      <Pagination numPages = "2" />
      <SubscribeButton />
    </Layout>
  );
};

export default Index;
