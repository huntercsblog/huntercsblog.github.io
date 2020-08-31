import React from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {},
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
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

const normalizeUrl = (url) => url.replace(/ /g, "-").toLowerCase();

const Header = ({ title }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navbar {
            links
          }
        }
      }
    }
  `);

  const links = site.siteMetadata.navbar.links;
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h4"
          color="textSecondary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Divider classes={{root: classes.divider}} />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {links.map((link) => (
          <Link
            to={`/${normalizeUrl(link)}`}
            component={GatsbyLink}
            color="textSecondary"
            noWrap
            key={link}
            variant="h6"
            className={classes.toolbarLink}
          >
            {link}
          </Link>
        ))}

        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Header;
