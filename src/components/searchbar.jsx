import React, { useState } from "react";
import "src/assets/styles/searchbar.css";
import Fab from '@material-ui/core/Fab';
import Result from "../pages/results";
import { Link } from "gatsby";




const SearchBar = () => {
    const [keyword, setkeyword] = useState('');
    return (
        <form action="./results" method="get">
            <div id="SearchBar">
                <input
                    type="text"
                    placeholder="Search posts"
                    id="input"
                    value={keyword}
                    onInput={(e) => setkeyword(e.target.value)}
                />
                <Link to="/results"
                    type="submit" title="Search" onSubmit={console.log(keyword)}>
                    <Fab aria-label="Search" variant="extended">
                        Search
                    </Fab>
                </Link>
            </div>
        </form>
    )
};

export default SearchBar;