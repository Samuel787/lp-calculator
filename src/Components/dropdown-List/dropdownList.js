import React from "react";

const BollingerBandFrequencyOptions = ({ onChange, value }) => {
    return (
        <select id="bollingerBandFrequencyType" onChange={onChange} value={value}>
            <option value={FrequencyEnum.daily}>Daily</option>
            <option value={FrequencyEnum.hourly}>Hourly</option>
        </select>
    );
};

const TokenPairOptions = ({ onChange, value }) => {
    return (
        <select id="tokenPair" onChange={onChange} value={value}>
            <option value="ETH/USDC">ETH/USDC</option>
            <option value="ETH/USDT">ETH/USDT</option>
            <option value="ETH/DAI">ETH/DAI</option>
        </select>
    );
};

const LPPoolFeeOptions = ({ onChange, value }) => {
    return (
        <select id="LPPoolFee" onChange={onChange} value={value}>
            <option value="0.05%">0.05%</option>
            <option value="0.3%">0.3%</option>
            <option value="1%">1%</option>
        </select>
    );
};

const StrategyOptions = ({ onChange, value }) => {
    return (
        <select id="strategy" onChange={onChange} value={value}>
            <option value={StrategyEnum.minMax}>
                MIN/MAX <i class="fas fa-info"></i>
            </option>
            <option value={StrategyEnum.bollingerBand}>Bollinger Band</option>
        </select>
    );
};

export const DropdownList = ({ type, onChange, value }) => {
    return (
        <span className="input">
            {type === DropdownTypeEnum.tokenPair ? (
                <TokenPairOptions onChange={onChange} value={value} />
            ) : type === DropdownTypeEnum.LPPoolFee ? (
                <LPPoolFeeOptions onChange={onChange} value={value} />
            ) : type === DropdownTypeEnum.Strategy ? (
                <StrategyOptions onChange={onChange} value={value} />
            ) : (
                <BollingerBandFrequencyOptions onChange={onChange} value={value} />
            )}
            <span></span>
        </span>
    );
};

export const DropdownTypeEnum = Object.freeze({
    tokenPair: 1,
    LPPoolFee: 2,
    Strategy: 3,
    BollingerBandFrequency: 4,
});

export const StrategyEnum = Object.freeze({
    minMax: "minMax",
    bollingerBand: "bollingerBand",
});

export const FrequencyEnum = Object.freeze({
    daily: 0,
    hourly: 1,
});
