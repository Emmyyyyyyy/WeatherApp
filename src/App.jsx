import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Header } from "./components/header";
import { Lang } from "./components/Lang";
import { SearchBar } from "./components/searchBar";
import { Info } from "./components/info";
import { PMInfo } from "./components/pmInfo";
import humidityIcon from "./static/images/humidity-2.png"
import windSpeedIcon from "./static/images/wind.png"
import cloudIcon from "./static/images/cloud.png"

import "./App.css"

import plus from "./static/images/plus (1).png";
import minus from "./static/images/minus.png";

const infobtn = {plus, minus};


export default function App() {
  const [flip, setFlip] = useState(false)
  const [selected, setSelected] = useState(false)
  const [info, setInfo] = useState(infobtn.plus)
  const [cardWidth, setCardWidth] = useState("21rem");
  // const [rightContentWidth, setRightContentWidth] = useState("0")

  useEffect(()=>{
    if(selected){
      setInfo(infobtn.minus)
      setCardWidth("37rem");
      // setRightContentWidth("auto")
    }
    else{
      setInfo(infobtn.plus)
      setCardWidth("21rem")
      // setRightContentWidth("0")
    }
    // console.log(selected)
  }, [selected])

  function selectedHandler(){
    setSelected(!selected)
  }


  return (
    <>
      <Card className={flip ? "flip" : ""} style={{ width: cardWidth }}>
        <div className={flip ? "front-card flip flip" : "front-card flip"}>
          <div className="leftContent">
            <Lang flip={flip} />
            <div className="more-info-btn">
              <img src={info} className={selected? "minus-pic" : "plus-pic"} onClick={selectedHandler}/>
            </div>
            <div className="center-context">
              <Header />
              <SearchBar />
              <Info />
            </div>
          </div>
          {selected && (
            <div className="rightContentWrapper">
              <div className="devidedLine" />
              <div className="rightContent">
                <div className="content">
                  <img src={humidityIcon} alt="humidityIcon" className="catagoryIcon"/>
                  <p className="catagory">Humidity</p>
                  <p className="value">64</p>
                </div>
                <div className="content">
                  <img src={windSpeedIcon} alt="windSpeedIcon" className="catagoryIcon"/>
                  <p className="catagory">Wind Speed</p>
                  <p className="value">0.62</p>
                </div>
                <div className="content">
                  <img src={cloudIcon} alt="cloudIcon" className="catagoryIcon"/>
                  <p className="catagory">Cloud</p>
                  <p className="value">100</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="back-card">
          <div className="leftContent">
            <Lang flip={flip} />
            <div className="more-info-btn">
              <img src={info} className={selected? "minus-pic" : "plus-pic"} onClick={selectedHandler}/>
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
                <div className="content">
                  <img src={humidityIcon} alt="humidityIcon" className="catagoryIcon"/>
                  <p className="catagory">Humidity</p>
                  <p className="value">64</p>
                </div>
                <div className="content">
                  <img src={windSpeedIcon} alt="windSpeedIcon" className="catagoryIcon"/>
                  <p className="catagory">Wind Speed</p>
                  <p className="value">0.62</p>
                </div>
                <div className="content">
                  <img src={cloudIcon} alt="cloudIcon" className="catagoryIcon"/>
                  <p className="catagory">Cloud</p>
                  <p className="value">100</p>
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
