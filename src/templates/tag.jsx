import React from "react";
import { graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import SEO from "src/components/SEO";
import Layout from "src/layout";
import ArticleList from "src/components/article-list";

const TaggedContent = ({ data, pageContext }) => {
  const { totalCount } = data.articles;
  const description = data.tag? data.tag.description : "";
  return (
    <Layout>
      <SEO title={pageContext.tag} description={description} />
      <Box mb={2}>
        <Typography variant="h4" align="center">
          {pageContext.tag}
        </Typography>
        <Typography variant="h5" align="center">
          {description && <span>{description}&nbsp;&middot;&nbsp;</span>} 
          {totalCount} {totalCount === 1? "article" : "articles"}
        </Typography>
      </Box>
      <ArticleList articles={data.articles.edges} />
    </Layout>
  );
};

export const query = graphql`
  query($tag: String) {
    articles: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { tags: { in: [$tag] } } 
        fields: { collection: { eq: "publications" } }
      }
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
    tag: tagsJson(tag: {eq: $tag}) {
      description
      related
    }
  }`;

export default TaggedContent;
