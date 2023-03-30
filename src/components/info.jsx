/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import chevron from "../static/images/down-chevron.png"

export const Info = () => {
    const [selected, setSelected] = useState(false)
    const [selectedUnit, setSelectedUnit] = useState("EN");

    const handlerSelect = (eventKey, event) => {
        setSelectedUnit(eventKey);
    }

    return (
        <>
            <p className="country">Thailand</p>
            <div className='temp-box'>
                <p className="temp">37 C</p>
                <Dropdown className="unit-btn-box" onClick={() => setSelected(!selected)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="unit-btn">
                    <img src={chevron} className={selected ? "chevron chevron-selected" : "chevron"}/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="unit-menu">
                    <Dropdown.Item className="unit-item" eventKey="EN" active={selectedUnit === "EN"} onClick={(event) => handlerSelect("EN", event)}>
                        Kelvin
                    </Dropdown.Item>
                    <Dropdown.Item className="unit-item" eventKey="JP" active={selectedUnit === "JP"} onClick={(event) => handlerSelect("JP", event)}>
                        Celsius
                    </Dropdown.Item>
                    <Dropdown.Item className="unit-item" eventKey="ES" active={selectedUnit === "ES"} onClick={(event) => handlerSelect("ES", event)}>
                        Fahrenheit
                    </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <p>Few Clouds</p>
        </>
    )
}