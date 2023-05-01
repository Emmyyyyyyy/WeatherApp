import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Country, State, City }  from 'country-state-city';

import { Header } from "./components/header";
import { Lang } from "./components/Lang";
import { Info } from "./components/info";
import { PMInfo } from "./components/pmInfo";

import { fetchWeatherData } from "./services/weatherAPI";
import { fetchPMData } from "./services/pm2.5API";

import { MoreWeatherInfo } from "./components/moreWeatherInfo";
import { MorePMinfo } from "./components/morePMinfo";

import "./App.css"

import plus from "./static/images/plus (1).png";
import minus from "./static/images/minus.png";

const infobtn = {plus, minus};

export default function App() {
  const [flip, setFlip] = useState(false)
  const [selected, setSelected] = useState(false)
  const [info, setInfo] = useState(infobtn.plus)
  const [cardWidth, setCardWidth] = useState("21rem");
  const [serchbarLength, setSearchbarLength] = useState(false)
  const [storeWeatherData, setStoreWeatherData] = useState(null);
  const [storePMdata, setStorePMdata] = useState(null);
  const [isNight, setIsNight] = useState(false);
  const [input, setInput] = useState('')
  const [state, setState] = useState('bangkok')
  const date = new Date();
  const hours = date.getHours();
  const states = State.getAllStates();
  // const countries = Country.getAllCountries();
  
  useEffect(() => {
    setIsNight(hours >= 18 || hours < 6);
  }, [hours]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherData(setStoreWeatherData, state);
    }, 1000);
    fetchPMData(setStorePMdata);
    return () => clearInterval(intervalId);
  }, [state]);

  // console.log(storeWeatherData)

  useEffect(()=>{
    if(input.length > 0){
      setSearchbarLength(true)
    }
    else {
      setSearchbarLength(false)
    }
  }, [input])

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

  const handleChange=(event)=>{
    event.preventDefault();
    const getInput= event.target.value;
    setInput(getInput);
  }

  function handleSubmit(event){
    event.preventDefault();
    setState(input)
    setInput('')
  }

  return (
    <div className="Wrapper" style={{ background: isNight ? '#2E4F4F' : '#CBE4DE'}}>
      <Card className={flip ? "flip" : ""} style={{ width: cardWidth }}>
        <div className={flip ? "front-card flip" : "front-card"}>
          <div className="leftContent">
            <Lang flip={flip} />
            <div className="more-info-btn">
              <img src={info} className={selected? "minus-pic" : "plus-pic"} alt="info" onClick={selectedHandler}/>
            </div>
            <div className="center-context">
              <Header />
              <Form className="searchBar" onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="Search State" name="state" value={input} autoComplete="off" onChange={(e)=>handleChange(e)}/>
                {/* {serchbarLength && ( */}
                   {/* <div className="filterList"> */}
                    {/* {states.map((state, index)=>{return (
                      <p className="filterListText">{state}</p>
                    )})} */}
                  {/* <p className="filterListText">Bangkok</p> */}
                  {/* <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p>
                  <p className="filterListText">Bangkok</p> */}
                {/* </div> */}
                {/* )} */}
                <button className={`go-btn ${serchbarLength ? 'go-btn-on' : ''}`}>
                  <p>GO</p>
                </button>
              </Form>
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
              <div className="searchBar">
                <Form.Control type="text" placeholder="Search State" />
                <div className="go-btn">
                  <p>GO</p>
                </div>
              </div>
              <PMInfo pmValue={storePMdata?.data?.current?.pollution?.aqius} currentState={storePMdata?.data?.state}/>
            </div>
          </div>
            <div className={`rightContentWrapper ${selected ? 'expanded' : ''}`}>
              <div className="devidedLine" />
              <MorePMinfo pmValue={storePMdata?.data?.current?.pollution?.aqius}/>
            </div>
        </div>
      </Card>

      <div className="button">
        <span className={flip ? "circle-button back" : "circle-button front"} onClick={() => flip ? setFlip(!flip) : '' } style={{marginRight:"1rem"}}></span>
        <span className={flip ? "circle-button front" : "circle-button back"} onClick={() => !flip ? setFlip(!flip) : '' }></span>
      </div>
    </div>
  )
}
