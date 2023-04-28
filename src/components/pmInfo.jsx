/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import goodIcon from "../static/images/smile.png";
import moderateIcon from "../static/images/smiling-face.png"
import unhealthyForSomeGroupIcon from "../static/images/meh.png"
import unhealthyIcon from "../static/images/sad-face.png"
import veryUnhealthyIcon from "../static/images/angry.png"
import hazardousIcon from "../static/images/halo.png"
import loadingIcon from "../static/images/loading-bar.png"
// import { fetchPMData } from "../services/pm2.5API";

const Icon = {loadingIcon, goodIcon, moderateIcon, unhealthyForSomeGroupIcon, unhealthyIcon, veryUnhealthyIcon, hazardousIcon};
// const statusColor = {"ABC270", }

export const PMInfo = (props) => {
    // const [storeData, setStoreData] = useState({});
    const [level, setLevel] = useState('')
    const [statusIcon, setStatusIcon] = useState(Icon.loadingIcon);
    const [circleColor, setInnerCircleColor] = useState('rgba(14, 131, 136, 0.4)');
    const [pmValue, setpmValue] = useState('')

    // useEffect(() => {
    //   fetchPMData(setStoreData);
    // }, []);

    // console.log(storeData)

    useEffect(()=>{
      // const pm = storeData?.data?.current?.pollution?.aqius;
      setpmValue(props.pmValue);
  
      if (props.pmValue <= 50) {
        setStatusIcon(Icon.goodIcon);
        setInnerCircleColor("#ABC270");
        setLevel("Good");
      } else if (props.pmValue > 50 && props.pmValue <= 100) {
        setStatusIcon(Icon.moderateIcon);
        setInnerCircleColor("#FBC252");
        setLevel("Moderate");
      } else if (props.pmValue > 100 && props.pmValue <= 150) {
        setStatusIcon(Icon.unhealthyForSomeGroupIcon);
        setInnerCircleColor("#FF6E31");
        setLevel("Unhealthy for Sensitive Group");
      } else if (props.pmValue > 150 && props.pmValue <= 200) {
        setStatusIcon(Icon.unhealthyIcon);
        setInnerCircleColor("#DC3535");
        setLevel("Unhealthy");
      } else if (props.pmValue > 200 && props.pmValue <= 300) {
        setStatusIcon(Icon.veryUnhealthyIcon);
        setInnerCircleColor("#975C8D");
        setLevel("Very Unhealthy");
      } else if (props.pmValue > 300) {
        setStatusIcon(Icon.hazardousIcon);
        setInnerCircleColor("#B01E68");
        setLevel("Hazardous");
      }
    }, [props.pmValue])
      
    return (
        <>
            <div className="PMIconWrapper" style={{ background: circleColor }}>
                <div className="innerCircle">
                    <img src={statusIcon} className="PMIcon-pic" />
                </div>
            </div>
            <p className="country">{props.currentState}</p>
            <div className='temp-box'>
                <p className="temp">{pmValue}</p>
            </div>
            
            <p>{level}</p>
        </>
    )
}