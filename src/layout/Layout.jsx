import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import SEO from "../components/SEO";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "85vh",
  },
  main: {
    marginTop: theme.spacing(1.125),
  },
}));

const Layout = ({ content, toggleTheme, themeType }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO />
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Header
            toggleTheme={toggleTheme}
            themeType={themeType}
            title={title}
          />
          <main className={classes.main}>{content}</main>
        </Container>
      </div>
      <Container maxWidth="lg">
        <Footer title={title} />
      </Container>
    </>
  );
};
export default Layout;
