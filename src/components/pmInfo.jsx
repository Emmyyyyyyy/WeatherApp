/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import goodIcon from "../static/images/smile.png";
import moderateIcon from "../static/images/smiling-face.png"
import unhealthyForSomeGroupIcon from "../static/images/meh.png"
import unhealthyIcon from "../static/images/sad-face.png"
import veryUnhealthyIcon from "../static/images/angry.png"
import hazardousIcon from "../static/images/halo.png"
import loadingIcon from "../static/images/loading-bar.png"

const Icon = {loadingIcon, goodIcon, moderateIcon, unhealthyForSomeGroupIcon, unhealthyIcon, veryUnhealthyIcon, hazardousIcon};
// const statusColor = {"ABC270", }

export const PMInfo = (props) => {
    const [storeData, setStoreData] = useState({});
    const [level, setLevel] = useState('')
    const [statusIcon, setStatusIcon] = useState(Icon.loadingIcon);
    const [circleColor, setInnerCircleColor] = useState('rgba(14, 131, 136, 0.4)')

    const pm = 405

    useEffect(()=>{
        if(pm <= 50){
            setStatusIcon(Icon.goodIcon)
            setInnerCircleColor("#ABC270")
            setLevel('Good')
        }
        else if(pm > 50 && pm <= 100){
            setStatusIcon(Icon.moderateIcon)
            setInnerCircleColor("#FBC252")
            setLevel('Moderate')
        }
        else if(pm > 100 && pm <= 150){
            setStatusIcon(Icon.unhealthyForSomeGroupIcon)
            setInnerCircleColor("#FF6E31")
            setLevel('Unhealthy for Sensitive Group')
        }
        else if(pm > 150 && pm <= 200){
            setStatusIcon(Icon.unhealthyIcon)
            setInnerCircleColor("#DC3535")
            setLevel('Unhealthy')
        }
        else if(pm > 200 && pm <= 300){
            setStatusIcon(Icon.veryUnhealthyIcon)
            setInnerCircleColor("#975C8D")
            setLevel('Very Unhealthy')
        }
        else if(pm > 300){
            setStatusIcon(Icon.hazardousIcon)
            setInnerCircleColor("#B01E68")
            setLevel('Hazardous')
        }
    }, [])
    
    return (
        <>
            <div className="PMIconWrapper" style={{ background: circleColor }}>
                <div className="innerCircle">
                    <img src={statusIcon} className="PMIcon-pic" />
                </div>
            </div>
            <p className="country">Bangkok</p>
            <div className='temp-box'>
                <p className="temp">{pm}</p>
            </div>
            
            <p>{level}</p>
        </>
    )
}