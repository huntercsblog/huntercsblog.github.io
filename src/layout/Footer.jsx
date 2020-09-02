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
            href="https://www.facebook.com/huntercsblog"
          >
            <Facebook />
          </Link>
        </Grid>
        <Grid item>
          <Twitter />
        </Grid>
        <Grid item>
          <RssFeed />
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
            href="/contact"
            className={classes.footerLink}
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
      </Grid>
      <Typography variant="body1" align="center">
        &copy; {title} 2020 - {(new Date()).getFullYear()}
      </Typography>
    </>
  );
};

export default React.memo(Footer);
