import { ChainId, Fetcher, WETH, Route } from "@uniswap/sdk";
import { CurrencyAmount, MaxUint256, Price } from "@uniswap/sdk-core";
import {
    Position,
    Pool,
    NoTickDataProvider,
    TickMath,
    priceToClosestTick,
    encodeSqrtRatioX96,
    nearestUsableTick,
    TICK_SPACINGS,
    maxLiquidityForAmounts,
} from "@uniswap/v3-sdk";
import nr from "newton-raphson-method";
import { getETHPriceInUSD } from "./API.js";

const chainId = ChainId.MAINNET;
const tokenAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC address
const weiToEth = 1000000000000000000;
const miniToUSDC = 1000000;

// const tickLensABI = require("./abis/tickLens.json");
// const poolAddress = `0xd744bd581403078aeafeb344bdad812c384825b1`; // Kovan WETH/USDC Pool
// const tickLensAddress = `0xB79bDE60fc227217f4EE2102dC93fa1264E33DaB`; // Kovan Tick Lens

/**
 * Retrives the USDC for a given ETH and range in the pool position
 * @param {number} ethAmount the amount of input ether in ETH
 * @param {number} lower the lower bound in USDC
 * @param {number} upper the upper bound in USDC
 * @param {number} fee the fee amount in UniswapSDK::FeeAmount
 *
 * @returns the amount of USDC needed to add liquidity to the pool
 */
export async function getUSDCForETH(ethAmount, lower, upper, fee) {
    const USDC = await Fetcher.fetchTokenData(chainId, tokenAddress);
    const price = getETHPrice();

    const ethCurrencyAmount = CurrencyAmount.fromRawAmount(WETH[USDC.chainId], ethAmount);

    const sqrtRatioX96 = encodeSqrtRatioX96(price.numerator, price.denominator);

    const pool = new Pool(
        WETH[USDC.chainId],
        USDC,
        fee,
        sqrtRatioX96,
        0,
        TickMath.getTickAtSqrtRatio(sqrtRatioX96),
        new NoTickDataProvider()
    );

    const sqrtRatioAX96 = TickMath.getSqrtRatioAtTick(getTickForValue(USDC, lower, fee));
    const sqrtRatioBX96 = TickMath.getSqrtRatioAtTick(getTickForValue(USDC, upper, fee));

    // console.log(price.toFixed());

    const amountPosition = new Position({
        pool,
        liquidity: maxLiquidityForAmounts(
            sqrtRatioX96,
            sqrtRatioAX96,
            sqrtRatioBX96,
            MaxUint256,
            ethCurrencyAmount.quotient,
            false
        ),
        tickLower: getTickForValue(USDC, lower, fee),
        tickUpper: getTickForValue(USDC, upper, fee),
    }).amount0.toFixed();

    return miniToUSDC / amountPosition;

    // const web3 = new Web3(
    //   new Web3.providers.HttpProvider(
    //     "https://kovan.infura.io/v3/dbe1882d273b46239aa18c4c3658d077"
    //   )
    // );

    // can consider this approach for after uniswap v3 sdk goes into prod
    // const tickLensContract = new web3.eth.Contract(tickLensABI, tickLensAddress);
    // const quote = await tickLensContract.methods
    //   .getPopulatedTicksInWord(poolAddress, 0)
    //   .call();
}

export async function getETHPrice() {
    const USDC = await Fetcher.fetchTokenData(chainId, tokenAddress);
    const pair = await Fetcher.fetchPairData(USDC, WETH[USDC.chainId]);
    return new Route([pair], WETH[USDC.chainId], USDC).midPrice;
}

function getTickForValue(quoteToken, value, fee) {
    // base token fixed at 1 unit, quote token amount based on typed input
    const amount = CurrencyAmount.fromRawAmount(quoteToken, value * miniToUSDC);
    const amountOne = CurrencyAmount.fromRawAmount(WETH[quoteToken.chainId], weiToEth);

    const price = new Price(
        WETH[quoteToken.chainId],
        quoteToken,
        amount.quotient,
        amountOne.quotient
    );

    return nearestUsableTick(priceToClosestTick(price), TICK_SPACINGS[fee]);
}

/**
 * Retrives the value of USDC and ETH that the user has to provide in USD
 * @param {number} totalAmount total amount in USD the user has to provide liquidity with
 * @param {number} lower the lower bound in USDC
 * @param {number} upper the upper bound in USDC
 * @param {number} fee the fee amount in USD in UniswapSDK::FeeAmount
 * @param {number} gasFees the gas fees in USD
 *
 * @returns the amount of USDC and ETH needed to add liquidity to the pool
 */
export async function getAmountToProvide(totalAmount, lower, upper, fee, gasFees) {
	
	function f(x) { return x + getUSDCForETH(x, lower, upper, fee) + gasFees - totalAmount;} 
	const x = nr(f, 1);
	
	const ethPriceInUSD = await getETHPriceInUSD();
	
	const amountOfETH = x / ethPriceInUSD;
	
	const amountOfUSDC = getUSDCForEth(x, lower, upper, fee);
	
	return { "ETH": amountOfETH , "USDC": amountOfUSDC  };
}
