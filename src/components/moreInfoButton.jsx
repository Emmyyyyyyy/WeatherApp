/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import plus from "../static/images/plus (1).png";
import minus from "../static/images/minus.png";

const infobtn = {plus, minus};

export const MoreInfoButton = () => {
    const [selected, setSelected] = useState(false)
    const [info, setInfo] = useState(infobtn.plus)

    function selectedHandler(){
        if(selected){
            setInfo(infobtn.minus)
        }
        else{
            setInfo(infobtn.plus)
        }
        setSelected(!selected)
    }

    return (
        <div className="more-info-btn">
            <img src={info} className={selected? "plus-pic" : "minus-pic"} onClick={selectedHandler}/>
        </div>
    )
}