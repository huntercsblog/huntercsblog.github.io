import React, {useState} from "react";
import Layout from "src/layout";
import Typography from "@material-ui/core/Typography";
import "src/assets/styles/results.css";

const Result = props => {
  return (
    <Layout>
      <div id = "Search">
        <input
          type = "text"
          placeholder = "Search posts"
          id = "inptxt"
        />
          <div class="icons8-search"></div>
      </div>
      <Typography variant = "h5">
        Search Results for ""
      </Typography>
    </Layout>
  );
};

export default Result;
