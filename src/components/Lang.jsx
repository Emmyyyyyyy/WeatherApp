import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

export const Lang = () => {
    const [selectedLang, setSelectedLang] = useState("EN");

    const handlerSelect = (eventKey, event) => {
        setSelectedLang(eventKey);
    }     

    return (
        <Dropdown className="lang">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedLang}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="EN" active={selectedLang === "EN"} onClick={(event) => handlerSelect("EN", event)}>
                    English
                </Dropdown.Item>
                {/* <Dropdown.Item eventKey="JP" active={selectedLang === "JP"} onClick={(event) => handlerSelect("JP", event)}>
                    Japanese
                </Dropdown.Item>
                <Dropdown.Item eventKey="ES" active={selectedLang === "ES"} onClick={(event) => handlerSelect("ES", event)}>
                    Spanish
                </Dropdown.Item> */}
                <Dropdown.Item eventKey="TH" active={selectedLang === "TH"} onClick={(event) => handlerSelect("TH", event)}>
                    Thai
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

