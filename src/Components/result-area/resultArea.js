import React from "react";
import "./resultArea.css";

const ResultArea = (props) => {
    console.log(props);
    return (
        <div className="resultContainer">
            <h2>We recommend the following range:</h2>
            <p>$0 to $2500</p>
        </div>
    );
};

export default ResultArea;
