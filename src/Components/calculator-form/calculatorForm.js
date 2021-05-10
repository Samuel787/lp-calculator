import React from "react";
import CustomInput from "../custom-input/customInput";
import PairDropdown from "../pair-dropdown/pairDropdown";

const CalculatorForm = (props) => {
    return (
        <p>
            I have $
            <CustomInput
                id="amount"
                type="number"
                value={props.amount}
                onInputChange={props.onInputChange}
                placeholder="Amount"
            />{" "}
            and I want to provide liquidity in the <PairDropdown /> pair. <br />I want to get a
            recommendation of the range to provide liquidity based on the past{" "}
            <CustomInput
                id="numOfMonths"
                type="number"
                value={props.numOfMonths}
                onInputChange={props.onInputChange}
                placeholder="Months"
            />{" "}
            months data.
        </p>
    );
};

export default CalculatorForm;
