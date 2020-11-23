import React from "react";
import Fab from '@material-ui/core/Fab';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import { Link as GatsbyLink } from "gatsby";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",         //stay on bottom right
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    textDecoration: "none",    //Remove text underline
  },
  fab: {
    backgroundColor: "#A93F55",  //same as footer icon color
  },
  icon: {
    marginRight: theme.spacing(1),  //space between icon and text
  },
}));

const SubscribeButton = () => {
  const classes = useStyles();
  return (
    <GatsbyLink to="/subscribe" className={classes.button} title="Subscribe to our Newsletter">
      <Fab aria-label="subscribe" classes={{root: classes.fab}} variant="extended">
        <EmailIcon className={classes.icon} />
        Subscribe
      </Fab>
    </GatsbyLink>
  );
}

export default SubscribeButton;