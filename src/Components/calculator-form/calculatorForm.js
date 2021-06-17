import React from "react";
import CustomInput from "../custom-input/customInput";
import { DropdownList, DropdownTypeEnum, StrategyEnum } from "../dropdown-List/dropdownList";
import BollingerBandStrategy from "../strategy/bollingerBanStrategy";
import MinMaxStrategy from "../strategy/minMaxStrategy";

const CalculatorForm = (props) => {
    const { onDropDownChange, tokenPair, LPPoolFee, strategy, numOfMonths, onInputChange } = props;

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
            <DropdownList
                type={DropdownTypeEnum.tokenPair}
                onChange={onDropDownChange}
                value={tokenPair}
            />{" "}
            pair. <br />I am using the{" "}
            <DropdownList
                type={DropdownTypeEnum.LPPoolFee}
                onChange={onDropDownChange}
                value={LPPoolFee}
            />{" "}
            liquidity provider fee pool. <br />I want to get a recommendation using the{" "}
            <DropdownList
                type={DropdownTypeEnum.Strategy}
                onChange={onDropDownChange}
                value={strategy}
            />{" "}
            {strategy === StrategyEnum.minMax ? (
                <MinMaxStrategy numOfMonths={numOfMonths} onInputChange={onInputChange} />
            ) : (
                <BollingerBandStrategy {...props} />
            )}
        </p>
    );
};

export default CalculatorForm;
