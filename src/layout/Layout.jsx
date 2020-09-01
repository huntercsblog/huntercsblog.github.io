import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
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
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Header
            toggleTheme={toggleTheme}
            themeType={themeType}
            title={title}
          />
          <main className={classes.main}>{content}</main>
          <Footer title={title} />
        </Container>
      </div>
    </>
  );
};
export default Layout;
