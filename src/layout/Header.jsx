import React from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Title from "../assets/images/the_icarus_luminari.png";
import "../assets/styles/mobile-nav.css";
//import { getElementById } from "min-document";



const useStyles = makeStyles((theme) => ({
  toolbar: {},
  toolbarTitle: {
    flex: 1,
  },
 //toolbarsecondary: {
   // justifyContent: "space-around",
  //  overflowX: "auto",
 // },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  divider: {
    background: theme.palette.text.secondary,
  },
  "@media (max-width: 590px)": {
    toolbarTitle: {
      display: "flex",
      justifyContent: "flex-start",
    },
    toolbarsecondary:{
      display: "flex",
      justifyContent: "space-around",
      overflowX: "auto",
      width: "100%",
      backgroundColor: theme.palette.text.default,
      opacity: "1",
      flexDirection: " column",
      justifyContent: "center",
      alignContent: "center",
      position: "absolute",
      display: "column",
    
    },
    navbutton:{
      display:"inline",
    },
    hamburger: {
      display:"block",
      backgroundColor: theme.palette.text.secondary,
      width: "40px",
      height: "6px",
      borderRadius: "5px",
      margin: "7px 0px",
    },
  },
}));

//see gatsby-node.js
const normalizeURL = (url) => encodeURIComponent(url.replace(/ /g, "-").toLowerCase());

/**
 * Renders a nav link (Gatsby Link)
 * Props:
 * @children   rendered as visible text
 * @className  passed as the underlying Link's className
 * @to         the local url to go to
 */
const NavLink = (props) => (
  <Link
    to={props.to}
    component={GatsbyLink}
    color="textSecondary"
    noWrap
    variant="h5"
    className={props.className}
  >
    {props.children}
  </Link>
);

const Header = ({ title, toggleTheme }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navbar {
            links
            tags
          }
        }
      }
    }
  `);

  const links = site.siteMetadata.navbar.links;
  const tags = site.siteMetadata.navbar.tags;
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h3"
          color="textSecondary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            to="/"
            component={GatsbyLink}
            color="inherit"
            className={classes.link}
          >
            <img src={Title} alt={title} />
          </Link>
        </Typography>
        <Typography
          variant="button"
          color="secondary"
          align="right"
          noWrap
          className={classes.navbutton}
          id = "navbutton"
          onClick = {() => {
            let x = "toolbarsecondary"
            if(document.getElementById(x).style.display === "flex"){
            document.getElementById(x).style.display = "none";

          }else {
            document.getElementById(x).style.display = "flex";
          }}}
        >
          <Typography
          className={classes.hamburger}
          id = "topline"
          >
          </Typography>
          <Typography
          className={classes.hamburger}
          id = "middleline"
          >
          </Typography>
          <Typography
          className={classes.hamburger}
          id = "bottomline"
          >
          </Typography>
        </Typography>
      </Toolbar>
      <Divider classes={{ root: classes.divider }} />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarsecondary}
        id = "toolbarsecondary"
      >
        {tags.map((link) => (
          <NavLink 
            className={classes.toolbarLink} 
            to={`/tag/${normalizeURL(link)}`}
            key={link}
          >
            {link}
          </NavLink>
        ))}
        {links.map((link) => (
          <NavLink 
            className={classes.toolbarLink} 
            to={`/${normalizeURL(link)}`}
            key={link}
          >
            {link}
          </NavLink>
        ))}

        <IconButton onClick={toggleTheme}>
          <Brightness6Icon variant="outline" color="secondary" />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Header;
