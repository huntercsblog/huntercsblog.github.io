import React from "react";
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = useStyles();

  return <>&copy; {data.site.siteMetadata.title} 2020</>;
};

export default React.memo(Footer);
