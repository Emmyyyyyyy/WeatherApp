/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import chevron from "../static/images/down-chevron.png"

export const Info = (props) => {
    const [selected, setSelected] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState("°C");
    const [roundNum, setRoundNum] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');

    useEffect(()=>{
        setWeatherIcon(props.weatherIcon)
        if(selectedUnit === "°C") {
            setRoundNum(Math.round((props.temp) * 10) / 10)
        }
        else if(selectedUnit === "K") {
            setRoundNum(Math.round((props.temp+273) * 10) / 10)
        }
        else if(selectedUnit === "°F") {
            setRoundNum(Math.round(((props.temp+(9/5))+32) * 10) / 10)
        }
    }, [selectedUnit, props.weatherIcon, props.temp])

    const handlerSelect = (eventKey) => {
        setSelectedUnit(eventKey);
    }
    
    return (
        <>
            <img src={"https://openweathermap.org/img/wn/" + weatherIcon + "@4x.png"} className="weather-pic" />
            <p className="country">{props.country}</p>
            <div className='temp-box'>
                <p className="temp">{roundNum} {selectedUnit}</p>
                <Dropdown className="unit-btn-box" onClick={() => setSelected(!selected)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="unit-btn">
                    <img src={chevron} className={selected ? "chevron chevron-selected" : "chevron"}/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="unit-menu">
                    <Dropdown.Item className="unit-item" eventKey="°C" active={selectedUnit === "°C"} onClick={(event) => handlerSelect("°C", event)}>
                        Celsius
                    </Dropdown.Item>
                    <Dropdown.Item className="unit-item" eventKey="K" active={selectedUnit === "K"} onClick={(event) => handlerSelect("K", event)}>
                        Kelvin
                    </Dropdown.Item>
                    <Dropdown.Item className="unit-item" eventKey="°F" active={selectedUnit === "°F"} onClick={(event) => handlerSelect("°F", event)}>
                        Fahrenheit
                    </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <p>{props.weatherDescription}</p>
        </>
    )
}