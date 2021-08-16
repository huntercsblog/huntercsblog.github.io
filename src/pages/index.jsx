import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import Layout from "src/layout";
import ArticleList from "../components/article-list";
import SubscribeButton from "../components/SubscribeButton";
import { StaticImage } from "gatsby-plugin-image"

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
      <div>
        <div>
          image:
        </div>
        <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
      </div>
      <ArticleList articles={recent} title="Latest News" />
      <SubscribeButton />
    </Layout>
  );
};

export default Index;
