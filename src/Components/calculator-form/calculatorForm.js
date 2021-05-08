import React from "react";
import CustomInput from "../customInput/customInput";
import "./calculatorForm.css";

const CalculatorForm = (props) => {
    return (
        <div id="calculatorForm" className="shadow p-3 mb-5 bg-white rounded">
            <p>
                I have $<CustomInput id="amount" type="number" value="5000" /> and I want to provide
                liquidity in the
                <select id="pair">
                    <option value="ETH/USDC">ETH/USDC</option>
                </select>{" "}
                pair. <br />I want to get a recommendation of the range to provide liquidity based
                on the <CustomInput id="numOfMonths" type="number" value="12" /> months data.
            </p>
        </div>
    );
};

export default CalculatorForm;
