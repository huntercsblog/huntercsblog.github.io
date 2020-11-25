import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LaunchIcon from '@material-ui/icons/Launch';
import {Helmet} from "react-helmet";

import SEO from "src/components/SEO";
import Layout from "src/layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO title="Subscribe" />
      <Typography variant="h3" align="center">
        Subcribe to <em>The Icarus</em>
      </Typography>
      <p>
        We offer a bimonthly newsletter to our readers. Enter your email into
        the form below to receive this newsletter to be notified of our 
        featured articles and tech news. You can unsubscribe or resubscribe at
        any time.
        <Typography variant="h6">If you want to use your myhunter email, or you didn't get a confirmation email, fill out <Link color="textSecondary" href="https://docs.google.com/forms/d/e/1FAIpQLSdG8G0CqsStJqva8PVIr6v7Bf-VxJY7awffp6ssexUx4E000A/viewform?usp=sf_link"><LaunchIcon />&nbsp;this form instead</Link></Typography>
      </p>
      <Helmet>
        <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
      </Helmet>
      <iframe frameborder="0" id="iframewin" width="100%" height="300px" src="https://publ.maillist-manage.com/ua/Optin?od=11287ecb6ab97e&zx=12b8c0b07&lD=1a49514bdfe77105&n=11699f74ea77607&sD=1a49514bdfe77102" title="Email Signup"></iframe>
    </Layout>
  );
};

export default PrivacyPage;
