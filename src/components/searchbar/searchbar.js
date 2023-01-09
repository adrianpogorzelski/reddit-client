import React from "react";

const Searchbar = () => {
    return (
        <section id="searchbar">
            <input id="search" type="text" placeholder="Search for a subreddit" />
            <button>Search</button>
        </section>
    )
}

export default Searchbar;