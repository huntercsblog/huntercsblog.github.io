import React, {Fragment, useState} from "react";
import Layout from "src/layout";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useFlexSearch } from 'react-use-flexsearch';
import { graphql, useStaticQuery } from "gatsby";
import { Link as GatsbyLink } from "gatsby";
import "src/assets/styles/results.css";

const Result = props => {
  const pageQuery =useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const {index, store} = pageQuery.localSearchPages;
  const [searchQuery, setSearchQuery] = useState(' ');
  const results = useFlexSearch(searchQuery, index, store);
  return (
    <Layout>
      <div id = "Search">
        <input
          type = "text"
          placeholder = "Search posts"
          id = "inptxt"
          value = {searchQuery}
          onInput = {(e) => setSearchQuery(e.target.value)}
        />
          <div class="icons8-search"></div>
      </div>
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
    </Layout>
  );
};

export default Result;
