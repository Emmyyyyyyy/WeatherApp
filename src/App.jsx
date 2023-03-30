/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
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
  // className={flip ? "flip" : ""} onClick={() => setFlip(!flip)}
  return (
    <>
      <Card className={flip ? "flip" : ""}>
        <div className="front-card">
          <Lang flip={flip} />
          <MoreInfoButton />
          <div className="center-context">
            <Header />
            <SearchBar />
            <img src={weatherPic} className="weather-pic" />
            <Info />
          </div>
        </div>
        <div className="back-card">
          <Lang flip={flip} />
          <Header/>
          <SearchBar/>
        </div>
      </Card>
      
      <div className="button">
        <span className={flip ? "circle-button back" : "circle-button front"} onClick={() => flip ? setFlip(!flip) : '' } style={{marginRight:"1rem"}}></span>
        <span className={flip ? "circle-button front" : "circle-button back"} onClick={() => !flip ? setFlip(!flip) : '' }></span>
      </div>
    </>
  )
}
