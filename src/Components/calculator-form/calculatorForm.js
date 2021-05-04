import React from "react";
import RangeSlider from "../range-slider/rangeSlider";

import { FormWrapper, FormColumn } from "./styled";

const CalculatorForm = (props) => {
    return (
        <FormWrapper>
            <FormColumn>
                <RangeSlider
                    title="Title 1"
                    rangeChange={props.onRangeChange}
                    sliderId="rangeValue1"
                />
                <RangeSlider
                    title="Title 2"
                    rangeChange={props.onRangeChange}
                    sliderId="rangeValue2"
                />
            </FormColumn>
            <FormColumn>
                <RangeSlider
                    title="Title 3"
                    rangeChange={props.onRangeChange}
                    sliderId="rangeValue3"
                />
                <RangeSlider
                    title="Title 4"
                    rangeChange={props.onRangeChange}
                    sliderId="rangeValue4"
                />
            </FormColumn>
        </FormWrapper>
    );
};

export default CalculatorForm;
