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
      <p>This page is used to inform website visitors regarding our policies
        with the collection, use, and disclosure of Personal Information if
      anyone decided to use our Service, the Icarus website.</p>
      <p>If you choose to use our Service, then you agree to the collection
      and use of information in relation with this policy. The Personal
      Information that we collect are used for providing and improving the
      Service. We will not use or share your information with anyone except
      as described in this Privacy Policy.</p>
      <p>The primary purpose of this website is to deliver quality news
      content. We do not intend to collect or retain any information about
      visitors to the website for commercial purposes. There are only three
      areas of the website that collect information, and you may opt-out of all of them.</p>
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
      <Typography variant="h4">Security</Typography>
      <p>We value your trust in providing us your Personal Information,
      thus we are striving to use commercially acceptable means of
      protecting it. But remember that no method of transmission over
      the internet, or method of electronic storage is 100% secure and
      reliable, and we cannot guarantee its absolute security.</p>
      <Typography variant="h4">Links to Other Sites</Typography>
      <p>Our Service may contain links to other sites. If you click on
      a third-party link, you will be directed to that site. Note that
      these external sites are not operated by us. Therefore, we strongly
      advise you to review the Privacy Policy of these websites. We have no
      control over, and assume no responsibility for the content, privacy
      policies, or practices of any third-party sites or services.</p>
      <Typography variant="h6">Children's Privacy</Typography>
      <p>Our Services do not address anyone under the age of 13. We do not
      knowingly collect personal identifiable information from children under
      13. In the case we discover that a child under 13 has provided us with
      personal information, we immediately delete this from our servers. If
      you are a parent or guardian and you are aware that your child has
      provided us with personal information, please contact us so that we will
      be able to do necessary actions.</p>
      <Typography variant="h4">Changes to This Privacy Policy</Typography>
      <p>We may update our Privacy Policy from time to time. Thus, we advise
      you to review this page periodically for any changes. We will notify
      you of any changes by posting the new Privacy Policy on this page.
      These changes are effective immediately, after they are posted on this page.</p>
      <Typography variant="h4">Contact Us</Typography>
      <p>If you have any questions or suggestions about our Privacy Policy,
      do not hesitate to contact us.</p>
    </Layout>
  );
};

export default PrivacyPage;
