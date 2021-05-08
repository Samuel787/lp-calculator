import React from "react";
import "./resultArea.css";

const ResultArea = (props) => {
    console.log(props);
    return (
        <div className="resultContainer">
            <h2>Recommendation:</h2>
            <h4>Investment Amount</h4>
            <p>
                You will need ~ {props.ethNum} ETH and {props.usdc} USDC to invest in the pair after
                deducting the gas fee of {props.gasFee}({props.gasPercent}% of the initial
                investment).
            </p>
            <h4>Possible range based on the chosen parameters</h4>
            <p>{props.range}</p>
        </div>
    );
};

export default ResultArea;
