import React from "react";

const SearchForm = ({getSearch, updateSearch}) => {

    return (
        <div className="search">
            <p id="search-title">Search For Another Picture</p>
            <div className="search-form">
                <form id="search-input" onSubmit={getSearch}> 
                    <p>Enter a date (YYYY-MM-DD): </p>
                    <input type="text" id="search-bar" onChange={updateSearch}></input>
                    <button id="search-button" type="submit"> Search </button>
                </form>   
            </div>
        </div>
    )

    
}

export default SearchForm;