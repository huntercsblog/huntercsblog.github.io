import React from "react";
import { Link } from "gatsby";
import "../assets/styles/pagination.css";

const Pagination = ({ numPages }) => {
  const pages = [];
  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }

  const activeStyles = {
    background: "#c996f2",
  }

  return (
    <div id = "pages">
      {pages.map(page => (
        <Link
          to = {page === 1 ? `/` : `/${page}`}
          id = "links"
          activeStyle = {activeStyles}
          >
          <button id = "pagenumber">
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
