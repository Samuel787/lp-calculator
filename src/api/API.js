import axios from "axios";

// returns estimated gas fees for Uniswap LP add in ETH
export async function getGasFees(speed = "fast") {
    const response = await axios.get("https://www.etherchain.org/api/gasPriceOracle");

    // estimated gas usage of Uniswap v3 contract
    // for LP add
    // Source: https://bit.ly/3uPsdNq (Reddit Post)
    const gasUsage = 507000;

    const gweiToEth = 0.000000001;

    switch (speed) {
        case "safeLow":
        case "standard":
        case "fast":
        case "fastest":
            return parseFloat(response.data[speed]) * gasUsage * gweiToEth;
        default:
            return parseFloat(response.data.fastest) * gasUsage * gweiToEth;
    }
}

export async function getETHPriceInUSD() {
    const apiKey = "5433a72598153f713a1a25a9688ae2ab14a1741fb0168a02641353e0ce06ae39";

    const response = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${apiKey}`
    );

    return parseFloat(response.data["USD"]);
}

export async function getGasFeesInUSD(speed = "fast") {
    const gasFees = await getGasFees(speed);

    const ethPriceInUSD = await getETHPriceInUSD();

    return gasFees * ethPriceInUSD;
}
