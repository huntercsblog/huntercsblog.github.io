import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "src/layout";

const useStyles = makeStyles((theme) => ({
  aboutPanel: {
    marginTop: "2rem"
  },
  coloredLink: {
    color: theme.palette.text.secondary
  }
}));

const AboutPanel = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.aboutPanel}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.children}</Typography>
    </div>
  );
};

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Typography variant="h4" align="center">
        About <i>The Icarus</i>
      </Typography>
      <AboutPanel title="What Is It?">
        A student-run publication at Hunter college. This is a newspaper / blog covering topics relevant to the Daedalus community and Computer Science at Hunter at large. Check out <Link title="The Hunter Envoy" href="https://thehunterenvoy.wordpress.com" className={classes.coloredLink}>The Hunter Envoy</Link> for an example of what a student-run publication looks like.
      </AboutPanel>
      <AboutPanel title="Who Can Participate?">
        Ideally, anyone. Very few of us are reporters by trade, so we'll take stories from anyone related to our community. This includes CS Faculty, students, clubs, and alumni.
      </AboutPanel>
      <AboutPanel title="Where Can We See It?">
        The uncertainty of in-person operations resuming on campus in the fall means we're going to be publishing our content online for the foreseeable future.
      </AboutPanel>
      <AboutPanel title="Why Should We Do This?">
        Hunter Computer Science needs a paper of record. To outsiders, this is an up-to-date public-facing presence for Hunter CS. For students, this will also be a great way to make our impact on Hunter permanent. Future cohorts of students might find value in the history of their program, and might be inspired to revive past initiatives.
      </AboutPanel>
      <AboutPanel title="How Is This Going To Operate?">
        <ul>
          <li>Writers: full-time reporters, Daedalus students, and Hunter CS faculty can submit stories or op-eds to the editors</li>
          <li>Editors: a small group of students who will work with writers to polish and then approve stories for publication. Ideally, each editor will be concerned with stories pertaining to one topic/department.</li>
          <li>Editors-In-Chief: two devoted Daedalus students who will serve as the final decision makers and a point of contact with the administration</li>
          <li>Dev Team: responsible for designing and maintaining the website</li>
        </ul>
        <p>The editors and editors-in-chief should meet on a monthly basis to discuss stories and long-term goals.</p>
      </AboutPanel>
    </Layout>
  );
};

export default AboutPage;
