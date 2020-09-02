import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Facebook, Twitter, RssFeed } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const Footer = ({ title }) => {
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
            href="mailto:icarus@huntercs.club"
          >
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
            Write For Us
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
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
