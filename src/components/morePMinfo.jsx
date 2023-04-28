import React from "react";

export const MorePMinfo = (props) => {
    let suggestionText = '';

    if (props.pmValue <= 50) {
        suggestionText = "Air quality is considered satisfactory, and air pollution poses little or no risk."
    } else if (props.pmValue > 50 && props.pmValue <= 150) {
        suggestionText = "Active children and adults, and people with respiratory, such as asthma, should limit prolonged outdoor exertion."
    } else if (props.pmValue > 150 && props.pmValue <= 200) {
        suggestionText = "Active children and adults, and people with respiratory, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion."
    } else if (props.pmValue > 200 && props.pmValue <= 300) {
        suggestionText = "Active children and adults, and people with respiratory, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."
    } else if (props.pmValue > 300) {
        suggestionText = "Everyone should avoid all outdoor exertion"
    }
    
    return (
        <div className="rightContent">
            <div className="suggestion">
                <p className="suggestionText">Suggestion</p>
                <p>{suggestionText}</p>
            </div>
        </div>
    )
}