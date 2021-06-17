import React from "react";
import CustomInput from "../custom-input/customInput";

const MinMaxStrategy = ({ numOfMonths, onInputChange }) => {
    return (
        <span>
            strategy to provide liquidity based on the past{" "}
            <CustomInput
                id="numOfMonths"
                type="number"
                value={numOfMonths}
                onInputChange={onInputChange}
                placeholder="Months"
            />{" "}
            months data.
        </span>
    );
};

export default MinMaxStrategy;
