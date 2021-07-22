import React from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Facebook, Twitter, RssFeed, Email } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Title from "../assets/images/the_icarus_luminari.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {},
  toolbarTitle: {
    flex: 1,
  },
  toolbarMiddle: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  divider: {
    background: theme.palette.text.secondary,
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
      </Toolbar>
      <Toolbar className={classes.toolbarMiddle}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Link
              title="Subscribe to our Newsletter"
              to="/subscribe"
              component={GatsbyLink}
              className={classes.toolbarSubscribe}
            >
              Subscribe
            </Link>
          </Grid>
          <Grid item>
            <div>
              New York, New York * July 22, 2021 
            </div>
          </Grid>
          <Grid item>
            <Link
              title="Facebook Page"
              href="https://www.facebook.com/huntercsblog"
              className={classes.toolbarSocial}
            >
              <Facebook />
            </Link>
            <Link
              title="Twitter Page"
              href="https://twitter.com/huntercsblog"
              className={classes.toolbarSocial}
            >
              <Twitter htmlColor="#1DA1F2" />
            </Link>
            <Link
              title="RSS Feed"
              href="/rss.xml"
              type="application/rss+xml"
              className={classes.toolbarSocial}
            >
              <RssFeed htmlColor="#DE781F" />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider classes={{ root: classes.divider }} />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
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
      {/* <SubscribeButton /> */}

      </Toolbar>
    </>
  );
};

export default Header;
