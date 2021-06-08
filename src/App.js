import React, { Component } from "react";
import styled from "styled-components";
import { getGasFeesInUSD } from "./api/API";
import getTickerHistoricalMinMaxPrice from "./api/priceHistoryApi";
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
            token1Count: 0,
            token2Count: 0,
            minRange: 0,
            maxRange: 0,
            gasFeesInUSD: 0,
            gasPercent: 0,
            tokenPair: "ETH/USDC",
            LPPoolFee: "0.3%",
            strategy: "min/max",
        };
    }

    componentDidMount() {
        // Initial Calculation based on default fields
        this.updateRecommendation();
    }

    onInputChange = (event) => {
        this.setState({ [event.target.id]: parseFloat(event.target.value) });
    };

    onDropDownChange = (event) => {
        console.log(event);
        this.setState({ [event.target.id]: event.target.value });
    };

    onRecommendationBtnClick = () => {
        this.updateRecommendation();
    };

    async updateRecommendation() {
        const { amount, numOfMonths, tokenPair } = this.state;

        const token1Name = tokenPair.split("/")[0];
        const token2Name = tokenPair.split("/")[1];

        const gasFeesInUSD = parseFloat((await getGasFeesInUSD()).toFixed(2));
        const gasPercent = parseFloat(((gasFeesInUSD / amount) * 100).toFixed(2));

        const tokenMinMaxPrice = await getTickerHistoricalMinMaxPrice(
            token1Name,
            token2Name,
            numOfMonths
        );
        const minRange = tokenMinMaxPrice["running_min"];
        const maxRange = tokenMinMaxPrice["running_max"];

        this.setState({ gasFeesInUSD, gasPercent, minRange, maxRange });
    }

    render() {
        const { amount, numOfMonths, tokenPair, LPPoolFee, strategy } = this.state;
        return (
            <AppWrapper>
                <NavBar />
                <div id="body">
                    <div id="calculatorForm" className="shadow p-3 mb-5 bg-white rounded">
                        <CalculatorForm
                            onInputChange={this.onInputChange}
                            onDropDownChange={this.onDropDownChange}
                            amount={amount}
                            numOfMonths={numOfMonths}
                            tokenPair={tokenPair}
                            LPPoolFee={LPPoolFee}
                            strategy={strategy}
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
