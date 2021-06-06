import React from "react";
import CustomInput from "../custom-input/customInput";
import { DropdownList, DropdownTypeEnum } from "../dropdown-List/dropdownList";

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
            and I want to provide liquidity in the{" "}
            <DropdownList type={DropdownTypeEnum.tokenPair} /> pair. I am using the{" "}
            <DropdownList type={DropdownTypeEnum.LPPoolFee} /> liquidity provider fee pool. <br />
            I want to get a recommendation using the{" "}
            <DropdownList type={DropdownTypeEnum.Strategy} /> strategy to provide liquidity based on
            the past{" "}
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
