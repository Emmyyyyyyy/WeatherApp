/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import chevron from "../static/images/down-chevron.png"
import weatherPic from "../static/images/02d@2x.png";


export const Info = (props) => {
    const [selected, setSelected] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState("°C");
    const [storeData, setStoreData] = useState({});
    const [roundNum, setRoundNum] = useState(0);
    var temp = 0;

    useEffect(()=>{
        const fetchData = async () => {
        const weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=33e89e9f5985c4a59d8060e8f122b223&units=metric", {
            method: "GET"
        });
        const weatherInfo = await weatherData.json();
        setStoreData(weatherInfo)
        }
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, [])

    useEffect(()=>{
        temp = storeData?.main?.temp
        if(selectedUnit === "°C") {
            setRoundNum(Math.round((temp) * 10) / 10)
        }
        else if(selectedUnit === "K") {
            setRoundNum(Math.round((temp+273) * 10) / 10)
        }
        else if(selectedUnit === "°F") {
            setRoundNum(Math.round(((temp+(9/5))+32) * 10) / 10)
        }
    }, [storeData, selectedUnit])

    const handlerSelect = (eventKey, event) => {
        setSelectedUnit(eventKey);
    }

    return (
        <>
            <img src={weatherPic} className="weather-pic" />
            <p className="country">{storeData?.name}</p>
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
            
            <p>{storeData?.weather?.[0]?.description}</p>
        </>
    )
}