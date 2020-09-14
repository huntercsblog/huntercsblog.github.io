import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { Facebook, Twitter, RssFeed } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: theme.palette.text.secondary,
  },
  divider: {
    background: theme.palette.text.secondary,
  },
}));


const Footer = ({ title }) => {
  const classes = useStyles();
  const year = (new Date()).getFullYear();
  return (
    <>
      <Divider classes={{root: classes.divider}} />
      <Typography
        variant="h5"
        color="textSecondary"
        align="center"
        noWrap
      >
        <Link
          to="/"
          component={GatsbyLink}
          color="inherit"
        >
          {title}
        </Link>
      </Typography>
      <Grid 
        container 
        direction="row"
        justify="center" 
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Link
            title="Facebook Page"
            href="https://www.facebook.com/huntercsblog"
          >
            <Facebook />
          </Link>
        </Grid>
        <Grid item>
          <Twitter />
        </Grid>
        <Grid item>
          <Link title="RSS Feed" href="/rss.xml" type="application/rss+xml">
            <RssFeed htmlColor="#DE781F" />
          </Link>
        </Grid>
      </Grid>
      <Grid 
        container 
        direction="row"
        justify="center" 
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Link 
            to="/contact"
            className={classes.footerLink}
            component={GatsbyLink}
          >
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Link to="/about" className={classes.footerLink} component={GatsbyLink}>
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link to="/join" className={classes.footerLink} component={GatsbyLink}>
            Write For Us
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.huntercs.club" className={classes.footerLink} target="_blank" rel="noopener">
            Hunter CS Clubs
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body1" align="center">
        &copy; {title} 2020 {year !== 2020 && ` - ${year}`}
      </Typography>
    </>
  );
};

export default React.memo(Footer);
