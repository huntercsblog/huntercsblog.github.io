import React from "react";
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
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header toggleTheme={toggleTheme} themeType={themeType} />
        <Container className={classes.main}>{content}</Container>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
