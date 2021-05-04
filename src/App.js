import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import CalculatorForm from "./Components/calculator-form/calculatorForm";
import NavBar from "./Components/navbar";
import ResultArea from "./Components/result-area/resultArea";

const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`;

const defaultRangeValue = 30;

class App extends Component {
    constructor() {
        super();
        this.state = {
            rangeValue1: defaultRangeValue,
            rangeValue2: defaultRangeValue,
            rangeValue3: defaultRangeValue,
            rangeValue4: defaultRangeValue,
        };
    }

    onRangeChange = (event) => {
        this.setState({ [event.target.parentNode.id]: parseInt(event.target.ariaValueNow) });
    };

    render() {
        return (
            <AppWrapper>
                <NavBar />
                <CalculatorForm onRangeChange={this.onRangeChange} />
                <ResultArea {...this.state} />
            </AppWrapper>
        );
    }
}

export default App;
