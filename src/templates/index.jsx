import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import SubscribeButton from "../components/SubscribeButton";

import "../assets/styles/pagination.css";


const IndexPage = ({ data, pageContext }) => {
  const recent = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <ArticleList articles={recent} title="Latest News" />
      {!isFirst && (
        <Link to={prevPage} rel="prev" id = "prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next" id = "next">
          Next Page
        </Link>
      )}
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
