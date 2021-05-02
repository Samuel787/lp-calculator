import React, { Component } from "react";
import RangeSlider from "../range-slider/rangeSlider";

import { FormWrapper, FormColumn } from "./styled";

class CalculatorForm extends Component {
  render() {
    return (
      <FormWrapper>
        <FormColumn>
          <RangeSlider title="Title 1" />
          <RangeSlider title="Title 2" />
        </FormColumn>
        <FormColumn>
          <RangeSlider title="Title 3" />
          <RangeSlider title="Title 4" />
        </FormColumn>
      </FormWrapper>
    );
  }
}

export default CalculatorForm;
