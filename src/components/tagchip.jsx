import React from "react";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import {Link as GatsbyLink} from "gatsby";

//see gatsby-node.js
const normalizeURL = (url) => encodeURIComponent(url.replace(/ /g, "-").toLowerCase());

const TagChip = ({label, name, className}) => {
  return (
    <Link component={GatsbyLink} to={`/tag/${normalizeURL(name)}`} underline="none">
      <Chip 
        label={label}
        className={className}
        clickable={true}
      />
    </Link>
  );
}

export default TagChip;