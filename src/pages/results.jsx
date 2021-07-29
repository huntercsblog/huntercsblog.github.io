import React, {useState} from "react";
import Layout from "src/layout";
import Typography from "@material-ui/core/Typography";
import "src/assets/styles/results.css";
// import { useFlexSearch } from 'react-use-flexsearch';
import { graphql, useStaticQuery } from "gatsby";

const Result = props => {
  const pageQuery =useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
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
            rawBody
          }
        }
      }
    }
  `);
  const index = pageQuery.index;
  return (
    <Layout>
      <div id = "Search">
        <input
          type = "text"
          placeholder = "Search posts"
          id = "inptxt"

        />
          <div class="icons8-search"></div>
      </div>
      <Typography variant = "h5">
        Search Results for ""
      </Typography>
    </Layout>
  );
};

export default Result;
