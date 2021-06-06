import React, { Component } from "react";
import styled from "styled-components";
import { getGasFeesInUSD } from "./api/API";
import getTickerHistoricalMinMaxPrice from "./api/priceHistoryApi";
import "./App.css";
import CalculatorForm from "./Components/calculator-form/calculatorForm";
import NavBar from "./Components/navbar";
import ResultArea from "./Components/result-area/resultArea";
import { DropdownTypeEnum } from "./Components/dropdown-List/dropdownList";

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
            gasFeesInUSD: 0,
            gasPercent: 0,
            LPPoolFee: 0,
            strategyChosen: 0,
        };
    }

    componentDidMount() {
        // Initial Calculation based on default fields
        this.updateRecommendation();
    }

    onInputChange = (event) => {
        this.setState({ [event.target.id]: parseFloat(event.target.value) });
    };

    onRecommendationBtnClick = () => {
        this.updateRecommendation();
    };

    async updateRecommendation() {
        const { amount, numOfMonths } = this.state;

        const gasFeesInUSD = parseFloat((await getGasFeesInUSD()).toFixed(2));
        const gasPercent = parseFloat(((gasFeesInUSD / amount) * 100).toFixed(2));

        const tokenMinMaxPrice = await getTickerHistoricalMinMaxPrice("ETH", numOfMonths);
        const minRange = tokenMinMaxPrice["running_min"];
        const maxRange = tokenMinMaxPrice["running_max"];

        this.setState({ gasFeesInUSD, gasPercent, minRange, maxRange });
    }

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
                            className="btn btn-primary btn-lg"
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
