/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import chevron from "../static/images/down-chevron.png"

export const Info = (props) => {
    const [selected, setSelected] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState("°C");
    const [roundNum, setRoundNum] = useState(0);
    // const [weatherIcon, setWeatherIcon] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [src, setSrc] = useState("");


    useEffect(()=>{
        if(selectedUnit === "°C") {
            setRoundNum(Math.round((props.temp) * 10) / 10)
        }
        else if(selectedUnit === "K") {
            setRoundNum(Math.round((props.temp+273) * 10) / 10)
        }
        else if(selectedUnit === "°F") {
            setRoundNum(Math.round(((props.temp+(9/5))+32) * 10) / 10)
        }
    }, [selectedUnit, props.temp])

    useEffect(() => {
        const img = new Image();
        img.src = `https://openweathermap.org/img/wn/${props.weatherIcon}@4x.png`;
        img.onload = () => {
          setLoading(false);
          setError(false);
          setSrc(img.src);
        };
        img.onerror = () => {
          setLoading(false);
          setError(true);
        };
    }, [props.weatherIcon]);

    const handlerSelect = (eventKey) => {
        setSelectedUnit(eventKey);
    }

    return (
        <>
            <div className="weatherIconWrapper" style={{ visibility: error ? "hidden" : "" }}>
                {loading ? (
                    <span class="loader"></span>
                    ):(
                    <img src={src} alt="Weather Icon" className="weather-pic"/>
                )}
            </div>
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