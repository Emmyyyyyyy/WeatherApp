import React from "react";
import { Form } from "react-bootstrap";

export const SearchBar = () => {
    return (
        <div className="searchBar">
            <Form.Control type="text" placeholder="Search Country" />
            <div className="go-btn"><p>GO</p></div>
        </div>
    )
}