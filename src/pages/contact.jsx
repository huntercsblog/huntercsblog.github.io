import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Layout from "src/layout";

const ContactPage = () => {
  return (
    <Layout>
      <Box mb={1}>
        <Typography variant="h4" align="center">
          Get In Touch
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h5">
            Editor In Chief
          </Typography>
          <Typography variant="body1">
            Max Zlotskiy - icarus@huntercs.club
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="mailto:icarus@huntercs.club">Email</Button>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default ContactPage;
