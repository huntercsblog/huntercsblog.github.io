import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import SEO from "src/components/SEO";
import Layout from "src/layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Typography variant="h3" align="center">
        Privacy Policy
      </Typography>
      <p>The primary purpose of this website is to deliver quality news content. We do not intend to collect or retain any information about visitors to the website for commercial purposes. There are only three areas of the website that collect information, and you may opt-out of all of them.</p>
      <Typography variant="h4">Comments</Typography>
      <p>We use disqus for the comments section under articles. If you choose to comment, your data is governed by the <Link color="textSecondary" href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy">Disqus Privacy Policy</Link></p>
      <Typography variant="h4">Newsletter</Typography>
      <p>We use a 3rd party service to manage our mailing list. 
      If you sign up for our newsletter, you consent to 
      receiving emails from us. We will only send you our newsletter. 
      We do not promote or advertise products to our subscribers.</p>
      <Typography variant="h4">Hit Count</Typography>
      <p>We use Google Analytics to count how many people visit 
      our website. This information is reported anonymously in bulk. 
      You can <Link color="textSecondary" href="javascript:gaOptout();">click here to opt-out.</Link></p>
    </Layout>
  );
};

export default PrivacyPage;
