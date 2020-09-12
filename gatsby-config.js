const site = require("./config/site");
const plugins = require("./config/plugins");

module.exports = {
  pathPrefix: `/red-thread`,
  siteMetadata: site,
  plugins,
};
