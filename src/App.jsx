import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Header } from "./components/header";
import { Lang } from "./components/Lang";
import { SearchBar } from "./components/searchBar";
import { Info } from "./components/info";
import { PMInfo } from "./components/pmInfo";
import { fetchWeatherData } from "./services/weatherAPI";

import "./App.css"

import plus from "./static/images/plus (1).png";
import minus from "./static/images/minus.png";
import { MoreWeatherInfo } from "./components/moreWeatherInfo";

const infobtn = {plus, minus};


export default function App() {
  const [flip, setFlip] = useState(false)
  const [selected, setSelected] = useState(false)
  const [info, setInfo] = useState(infobtn.plus)
  const [cardWidth, setCardWidth] = useState("21rem");
  const [storeWeatherData, setStoreWeatherData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherData(setStoreWeatherData);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(()=>{
    if(selected){
      setInfo(infobtn.minus)
      setCardWidth("37rem");
    }
    else{
      setInfo(infobtn.plus)
      setCardWidth("21rem")
    }
  }, [selected])

  function selectedHandler(){
    setSelected(!selected)
  }
  
  console.log(storeWeatherData)

  return (
    <>
      <Card className={flip ? "flip" : ""} style={{ width: cardWidth }}>
        <div className={flip ? "front-card flip" : "front-card"}>
          <div className="leftContent">
            <Lang flip={flip} />
            <div className="more-info-btn">
              <img src={info} className={selected? "minus-pic" : "plus-pic"} alt="info" onClick={selectedHandler}/>
            </div>
            <div className="center-context">
              <Header />
              <SearchBar />
              <Info temp={storeWeatherData?.main?.temp} weatherIcon={storeWeatherData?.weather?.[0]?.icon} country={storeWeatherData?.name} weatherDescription={storeWeatherData?.weather?.[0]?.description}/>
            </div>
          </div>
          <div className={`rightContentWrapper ${selected ? 'expanded' : ''}`}>
            <div className="devidedLine" />
            <MoreWeatherInfo humidity={storeWeatherData?.main?.humidity} wind={storeWeatherData?.wind?.speed} cloud={storeWeatherData?.clouds?.all}/>
          </div>
        </div>
        <div className="back-card">
          <div className="leftContent">
            <Lang flip={flip} />
            <div className="more-info-btn">
              <img src={info} className={selected? "minus-pic" : "plus-pic"} alt="info" onClick={selectedHandler}/>
            </div>
            <div className="center-context">
              <Header />
              <SearchBar />
              <PMInfo />
            </div>
          </div>
          {selected && (
            <div className="rightContentWrapper">
              <div className="devidedLine" />
              <div className="rightContent">
                <div className="suggestion">
                  <p className="suggestionText">Suggestion</p>
                  <p>Active children and adults, and people with respiratory, such as asthma, should limit prolonged outdoor exertion.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="button">
        <span className={flip ? "circle-button back" : "circle-button front"} onClick={() => flip ? setFlip(!flip) : '' } style={{marginRight:"1rem"}}></span>
        <span className={flip ? "circle-button front" : "circle-button back"} onClick={() => !flip ? setFlip(!flip) : '' }></span>
      </div>
    </>
  )
}
