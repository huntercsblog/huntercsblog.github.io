import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Link as GatsbyLink } from "gatsby";

/**
 * Renders a list of articles, scalable to any width.
 * Props:
 *   @articles  the result of a GraphQL query. Only pass in the .edges part.
 * Children:
 *   none
 */
const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      {articles.map((edge, index) => (
        <Box component={Card} my={1} key={index}>
          <CardActionArea component={GatsbyLink} to={`/articles/${edge.node.fields.slug}`}>
            <CardContent>
              <Typography variant="h5" color="textSecondary">
                {edge.node.frontmatter.title}
              </Typography>
              <Typography variant="h6">
                <time datetime={edge.node.frontmatter.datetime}>{edge.node.frontmatter.humanDate}</time>
                &middot;{" "}
                {edge.node.timeToRead} min read
              </Typography>
              {edge.node.excerpt}
            </CardContent>
          </CardActionArea>
        </Box>
      ))}
    </Fragment>
  );
}

export default ArticleList;