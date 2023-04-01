/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Header } from "./components/header";
import { Lang } from "./components/Lang";
import { SearchBar } from "./components/searchBar";
import { Info } from "./components/info";
import { MoreInfoButton } from "./components/moreInfoButton";
import weatherPic from "./static/images/02d@2x.png";

import "./App.css"


export default function App() {
  const [flip, setFlip] = useState(false)
  const [storeData, setStoreData] = useState({})

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
    // fetchData();
  }, [])

  const weather = storeData?.weather?.[0]?.description
  console.log(weather?.[0]?.description)

  return (
    <>
      <Card className={flip ? "flip" : ""}>
        <div className={flip ? "front-card flip flip" : "front-card flip"}>
          <Lang flip={flip} />
          <MoreInfoButton />
          <div className="center-context">
            <Header />
            <SearchBar />
            <img src={weatherPic} className="weather-pic" />
            <Info city={storeData?.name} temp={storeData?.main?.temp} desc={storeData?.weather?.[0]?.description}/>
          </div>
        </div>
        <div className="back-card">
        <Lang flip={flip} />
          <MoreInfoButton />
          <div className="center-context">
            <Header />
            <SearchBar />
            <img src={weatherPic} className="weather-pic" />
            <Info />
          </div>
        </div>
      </Card>

      <div className="button">
        <span className={flip ? "circle-button back" : "circle-button front"} onClick={() => flip ? setFlip(!flip) : '' } style={{marginRight:"1rem"}}></span>
        <span className={flip ? "circle-button front" : "circle-button back"} onClick={() => !flip ? setFlip(!flip) : '' }></span>
      </div>
    </>
  )
}
