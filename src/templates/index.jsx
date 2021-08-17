import React from "react";
import { graphql } from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import SubscribeButton from "../components/SubscribeButton";
import Pagination from "../components/pagination.jsx";

const IndexPage = ({ data, pageContext }) => {
  const recent = data.allMdx.edges;
  const { numPages } = pageContext;

  return (
    <Layout>
      <ArticleList articles={recent} title="Latest News" />
      {/*Pagination Component*/}
      <Pagination numPages = {numPages}/>
      <SubscribeButton />
    </Layout>
  );
};

export const query = graphql`
  query($limit: Int!, $skip: Int!){
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { collection: { eq: "publications" } } }
      skip: $skip,
      limit: $limit,
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
`;

export default IndexPage;
