import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { graphql } from "gatsby";

import Layout from "src/layout";
import TagChip from "src/components/tagchip";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    padding: theme.spacing(1),
    textAlign: "center",
  },
  chip: {
    margin: theme.spacing(2),
  },
  chipContainer: {
    display: "inline"
  },
}));

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
              <TagChip 
                label={`${tag.fieldValue} (${tag.totalCount})`}
                name={tag.fieldValue}
                className={classes.chip}
              />
          </li>
        ))}
      </Paper>
    </Layout>
  );
};

export default TagsPage;

export const query = graphql`
  query {
    allMdx(
      limit: 2000
      filter: { fields: { collection: { eq: "publications" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
