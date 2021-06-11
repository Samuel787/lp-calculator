import React from "react";
import CustomInput from "../custom-input/customInput";
import { DropdownList, DropdownTypeEnum } from "../dropdown-List/dropdownList";

const BollingerBandStrategy = ({
    onDropDownChange,
    bollingerBandFrequencyType,
    onInputChange,
    bollingerBandFrequencyValue,
}) => {
    return (
        <span>
            strategy using the{" "}
            <DropdownList
                type={DropdownTypeEnum.BollingerBandFrequency}
                onChange={onDropDownChange}
                value={bollingerBandFrequencyType}
            />{" "}
            chart for the past{" "}
            <CustomInput
                id="bollingerBandFrequencyValue"
                type="number"
                value={bollingerBandFrequencyValue}
                onInputChange={onInputChange}
                placeholder="Frequency"
            />{" "}
            days.
        </span>
    );
};

export default BollingerBandStrategy;
