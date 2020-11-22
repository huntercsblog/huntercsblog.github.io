import React from "react";
import Typography from "@material-ui/core/Typography";
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
      </p>
      <Helmet>
        <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
      </Helmet>
      <iframe frameborder="0" id="iframewin" width="100%" height="300px" src="https://publ.maillist-manage.com/ua/Optin?od=11287ecb6ab97e&zx=12b8c0b07&lD=1a49514bdfe77105&n=11699f74ea77607&sD=1a49514bdfe77102" title="Email Signup"></iframe>
    </Layout>
  );
};

export default PrivacyPage;
