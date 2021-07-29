import React, {useState} from "react";
import Layout from "src/layout";
import { useFlexSearch } from 'react-use-flexsearch';
import { graphql, useStaticQuery } from "gatsby";
import "src/assets/styles/results.css";
import ResArt from "../components/result.jsx";

const Result = () => {
  const pageQuery =useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const {index, store} = pageQuery.localSearchPages;
  const [searchQuery, setSearchQuery] = useState(' ');
  const results = useFlexSearch(searchQuery, index, store);
  return (
    <Layout>
      <div id = "Search">
        <input
          type = "text"
          placeholder = "Search posts"
          id = "inptxt"
          value = {searchQuery}
          onInput = {(e) => setSearchQuery(e.target.value)}
        />
          <div class="icons8-search"></div>
      </div>
      <ResArt results={results} searchQuery={searchQuery}/>
    </Layout>
  );
};

export default Result;
