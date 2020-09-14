import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import lightBulb from "../assets/images/light_bulb_logo.png";
import team from "../assets/images/team.png";
import { withStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";

import SEO from "src/components/SEO";
import Layout from "src/layout";

const styles = {
  grid: {
    marginBottom: "2em",
  },
  card: {
    margin: 16,
    // Use flex layout with column direction for components in the card
    // (CardContent and CardActions)
    display: "flex",
    flexDirection: "column",
    // Justify the content so that CardContent will always be at the top of the card,
    // and CardActions will be at the bottom
    justifyContent: "space-between"
  },
  cardImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1em"
  },
  cardIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    height: "200px"
  },
};

const JoinUsPage = withStyles(styles)(({ classes }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);
  const email = site.siteMetadata.email;
  return (
    <Layout>
      <SEO title="Join Us" />
      <Box mb={1}>
        <Typography variant="h4" align="center">
          Get Involved
        </Typography>
      </Box>
      <Grid
        container
        className={classes.grid}
      >
        <Grid item sm={11} md component={Card} className={classes.card}>
            <CardMedia title="Light Bulb Moment">
              <img src={lightBulb} className={classes.cardImage} alt="Light bulb" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">
                Op-Ed
              </Typography>
              <Typography variant="body1">
                If you have a lead on a story or have a draft article ready-to-go, we'll work with you. Send an email to {email} with "Op-Ed" in the subject line. Everyone with any relationship to Hunter is welcome.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" href={"mailto:" + email}>Submit</Button>
            </CardActions>
        </Grid>
        <Grid item sm={11} md component={Card} className={classes.card}>
            <CardMedia title="Our Team">
              <img src={team} className={classes.cardImage} alt="Our Team" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">
                Join the Team
              </Typography>
              <Typography variant="body1">
                We welcome full-time writers, graphic designers and website developers to our team. Send an email to {email} with "Contributor" in the subject line. You'll be invited to our Slack workspace.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" href={"mailto:" + email}>Apply</Button>
            </CardActions>
        </Grid>
        <Grid item sm={11} md component={Card} className={classes.card}>
            <CardMedia title="Subscribe">
              <RssFeedIcon htmlColor="#DE781F" className={classes.cardIcon} />
            </CardMedia>
            <CardContent>
              <Typography variant="h5">
                Subscribe
              </Typography>
              <Typography variant="body1">
                Subscribe to all our new articles with RSS. Clicking the button below will connect to your favorite feed reader. You can customize how often you want digests. If you're using Safari on a Mac, you will have to get an app like FeedNotifier.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" href="/rss.xml">RSS</Button>
            </CardActions>
        </Grid>
      </Grid>
    </Layout>
  );
});

export default JoinUsPage;
