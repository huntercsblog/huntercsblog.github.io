import React, {Fragment} from "react";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Link as GatsbyLink } from "gatsby";
import Typography from "@material-ui/core/Typography";

const ResArt = ({results, searchQuery}) => {
  return (
    <Fragment>
      <Typography variant="h4">
        Search Results for "{searchQuery}"
      </Typography>
      {results.map(result => (
          <Box component={Card} my={1} key={result}>
            <CardActionArea component={GatsbyLink} to={`/articles/${result.slug}`}>
              <CardContent>
                <Typography variant="h5" color="textSecondary">
                  {result.title}
                </Typography>
                <Typography variant="h6">
                  <time datetime={result.humanDate}>{result.humanDate}</time>
                  {" "}&middot;{" "}
                  {result.timeToRead} min read
                </Typography>
                {result.excerpt}
              </CardContent>
            </CardActionArea>
          </Box>
      ))}
    </Fragment>
  );
}

export default ResArt;
