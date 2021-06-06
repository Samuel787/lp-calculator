import React from "react";

const TokenPairOptions = () => {
    return (
        <select id="pair">
            <option value="ETH/USDC">ETH/USDC</option>
        </select>
    );
};

const LPPoolFeeOptions = () => {
    return (
        <select id="pair">
            <option value="0.05%">0.05%</option>
            <option value="0.3%">0.3%</option>
            <option value="1%">1%</option>
        </select>
    );
};

const StrategyOptions = () => {
    return (
        <select id="pair">
            <option value="min/max">MIN/MAX</option>
        </select>
    );
};

export const DropdownList = ({ type }) => {
    return (
        <span className="input">
            {type === DropdownTypeEnum.tokenPair ? (
                <TokenPairOptions />
            ) : type === DropdownTypeEnum.LPPoolFee ? (
                <LPPoolFeeOptions />
            ) : (
                <StrategyOptions />
            )}
            <span></span>
        </span>
    );
};

export const DropdownTypeEnum = Object.freeze({
    tokenPair: 1,
    LPPoolFee: 2,
    Strategy: 3,
});
