import React from "react";

function Header(props) {
    return (
        <header id="page-header">
            <h1 id="top">EMPLOYEE DIRECTORY</h1>
            <br />
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" style={{marginRight: "20px"}} onClick={() => props.sortBy("name", "first", 1)}>Sort by first name</button>
                <button type="button" className="btn btn-primary" style={{marginRight: "20px"}} onClick={() => props.sortBy("name", "last", 1)}>Sort by last name</button>
                <button type="button" className="btn btn-success" onClick={() => props.sortBy("location", "state", 1)}>Sort by state</button>
            </div>
        </header>
    )
}

export default Header;