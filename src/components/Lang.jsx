import React from "react";
import { Dropdown } from "react-bootstrap";

export const Lang = () => {
    return (
        <Dropdown className="lang">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                EN
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Thai</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}