import React from "react";
import humidityIcon from "../static/images/humidity-2.png"
import windSpeedIcon from "../static/images/wind.png"
import cloudIcon from "../static/images/cloud.png"

export const MoreWeatherInfo = (props) => {
    return (
        <div className="rightContent">
            <div className="content">
                <img src={humidityIcon} alt="humidityIcon" className="catagoryIcon"/>
                <p className="catagory">Humidity</p>
                <p className="value">{props.humidity}</p>
            </div>
            <div className="content">
                <img src={windSpeedIcon} alt="windSpeedIcon" className="catagoryIcon"/>
                <p className="catagory">Wind Speed</p>
                <p className="value">{props.wind}</p>
            </div>
            <div className="content">
                <img src={cloudIcon} alt="cloudIcon" className="catagoryIcon"/>
                <p className="catagory">Cloud</p>
                <p className="value">{props.cloud}</p>
            </div>
        </div>
    )
}