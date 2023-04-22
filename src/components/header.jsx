import React, { useState, useEffect } from "react";

export const Header = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            // eslint-disable-next-line no-unused-expressions
            setDateState(new Date()), 30000});
        return () => clearInterval(interval);
    }, [dateState]);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthString = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    var day = weekday[dateState.getDay()];
    var date = dateState.getDate();
    var month = monthString[dateState.getMonth()];
    var year = dateState.getFullYear();
    var time = dateState.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    time = time.replace('PM', 'P.M.').replace('AM', 'A.M.')

    // if(newDate.getHours() > 12){
    //     unit = 'P.M.'
    // } else {
    //     unit = 'A.M.'
    // }

    return (
        <div className="header">
            <p>{day}, {date} {month} {year}</p>
            <p className="time">{time}</p>
        </div>
    )
}