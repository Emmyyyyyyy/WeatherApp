import React from "react";

export const Header = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthString = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var newDate = new Date();
    var day = weekday[newDate.getDay()];
    var date = newDate.getDate();
    var month = monthString[newDate.getMonth()];
    var year = newDate.getFullYear();
    var time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    time = time.replace('PM', 'P.M.').replace('AM', 'A.M.')

    // if(newDate.getHours() > 12){
    //     unit = 'P.M.'
    // } else {
    //     unit = 'A.M.'
    // }

    return (
        <>
            <p>{day}, {date} {month} {year}</p>
            <p className="time">{time}</p>
        </>
    )
}