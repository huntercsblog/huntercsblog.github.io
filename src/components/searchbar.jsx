import React, { useState } from "react";
import "src/assets/styles/searchbar.css";
import Fab from '@material-ui/core/Fab';



const SearchBar = () => {
    const [keyword, setkeyword] = useState(' ');
    return (
        <form action="./results" method="GET">
            <div id="search">
                <input
                    type="text"
                    placeholder="Search posts"
                    id="input"
                    name="q"
                    value={keyword}
                    onInput={(e) => setkeyword(e.target.value)}
                />
                <button id= "button" type="sumbit">
                    <Fab aria-label="Search" variant="extended">
                        Search
                    </Fab></button>
            </div>
        </form>
    )
};

export default SearchBar;