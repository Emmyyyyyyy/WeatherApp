/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import chevron from "../static/images/down-chevron.png"

export const Info = (props) => {
    const [selected, setSelected] = useState(false)
    const [selectedUnit, setSelectedUnit] = useState("EN");

    const handlerSelect = (eventKey, event) => {
        setSelectedUnit(eventKey);
    }

    var roundNum = Math.round((props.temp) * 10) / 10;
    console.log(roundNum);

    return (
        <>
            <p className="country">{props.city}</p>
            <div className='temp-box'>
                <p className="temp">{roundNum} C</p>
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
            
            <p>{props.desc}</p>
        </>
    )
}