import React from "react";

function SearchBar(props){
    return (
        <form>
            <input type="text" id="nameFilter" placeholder="Filter by last name" name="nameSearch"/>
            <button type="submit" onClick={(event) => props.filterByName(event)}>Submit</button>
        </form>
    )
}

export default SearchBar;