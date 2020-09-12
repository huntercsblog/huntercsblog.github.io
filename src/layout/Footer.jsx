import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Facebook, Twitter, RssFeed } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: theme.palette.text.secondary,
  },
}));


const Footer = ({ title }) => {
  const classes = useStyles();
  const year = (new Date()).getFullYear();
  return (
    <>
      <hr />
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
          <Link to="/" className={classes.footerLink}>
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className={classes.footerLink}>
            Write For Us
          </Link>
        </Grid>
        <Grid item>
          <Link to="/" className={classes.footerLink}>
            Join the team
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://hunterosc.org" className={classes.footerLink}>
            Hunter Open Source Club
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.hunteracm.org" className={classes.footerLink}>
            Hunter ACM
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
