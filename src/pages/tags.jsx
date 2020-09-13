import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Link as GatsbyLink, graphql } from "gatsby";

import Layout from "src/layout";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(2),
  },
  chipContainer: {
    display: "inline"
  },
}));

//see gatsby-node.js
const normalizeURL = (url) => encodeURIComponent(url.replace(/ /g, "-").toLowerCase());

const TagsPage = (props) => {
  //a list of all tags ever used in any article
  const tags = props.data.allMdx.group;
  //css styles
  const classes = useStyles();
  return (
    <Layout>
      <Box mb={1}>
        <Typography variant="h4" align="center">
          Click on the tag which interests you
        </Typography>
      </Box>
      <Paper component="ul" className={classes.root}>
        {tags.map((tag, index) => (
          <li key={index} className={classes.chipContainer}>
            <Link component={GatsbyLink} to={`/tag/${normalizeURL(tag.fieldValue)}`} underline="none">
              <Chip 
                label={`${tag.fieldValue} (${tag.totalCount})`}
                className={classes.chip}
                clickable={true}
              />
            </Link>
          </li>
        ))}
      </Paper>
    </Layout>
  );
};

export default TagsPage;

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
