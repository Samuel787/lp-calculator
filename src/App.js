import React, { Component } from "react";
import styled from "styled-components";
import { getGasFees } from "./api/API";
import { getTickerHistoricalPrice } from "./api/priceHistoryApi";
import "./App.css";
import CalculatorForm from "./Components/calculator-form/calculatorForm";
import NavBar from "./Components/navbar";
import ResultArea from "./Components/result-area/resultArea";

const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            amount: 5000,
            numOfMonths: 12,
            token1: 0,
            token2: 0,
            minRange: 0,
            maxRange: 0,
            gasFee: 0,
            gasPercent: 0,
        };
    }

    componentDidMount() {
        // To insert inital calculation
        // this.setState({ token1: 1, token2: 1 });
        console.log("mounted")
        let x = getGasFees()
        console.log(x)
        getTickerHistoricalPrice()
    }

    onInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onRecommendationBtnClick = (event) => {
        console.log("Recommendation Btn Click");
    };

    render() {
        const { amount, numOfMonths } = this.state;
        return (
            <AppWrapper>
                <NavBar />
                <div id="body">
                    <div id="calculatorForm" className="shadow p-3 mb-5 bg-white rounded">
                        <CalculatorForm
                            onInputChange={this.onInputChange}
                            amount={amount}
                            numOfMonths={numOfMonths}
                        />
                        <button
                            type="button"
                            id="recommendationBtn"
                            class="btn btn-primary btn-lg"
                            onClick={this.onRecommendationBtnClick}
                        >
                            Get Recommendation
                        </button>
                    </div>
                    <ResultArea {...this.state} />
                </div>
            </AppWrapper>
        );
    }
}

export default App;
