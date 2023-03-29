/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Header } from "./components/header";
import { Lang } from "./components/Lang";
import { SearchBar } from "./components/searchBar";
import { Info } from "./components/info";
import weatherPic from "./static/images/02d@2x.png"

import "./App.css"


export default function App() {
  const [flip, setFlip] = useState(false)
  return (
    <>
      <Card className={flip ? "flip" : ""} onClick={() => setFlip(!flip)}>
        <div className="front-card">
          <Lang />
          <div className="center-context">
            <Header />
            <SearchBar />
            <img src={weatherPic} className="weather-pic" />
            <Info />
          </div>
        </div>
        <div className="back-card">
          <Lang/>
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
