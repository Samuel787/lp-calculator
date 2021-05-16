import axios from "axios"

// returns estimated gas fees for Uniswap LP add in ETH
export async function getGasFees(speed = "fast") {

    const response = await axios.get("https://www.etherchain.org/api/gasPriceOracle")

    // estimated gas usage of Uniswap v3 contract
    // for LP add
    // Source: https://bit.ly/3uPsdNq (Reddit Post)
    const gasUsage = 507000

    const gweiToEth = 0.000000001
    switch (speed) {
        case "safeLow":
        case "standard":
        case "fast":
        case "fastest":
            return response.data[speed] * gasUsage * gweiToEth
        default:
            return response.data.fastest * gasUsage * gweiToEth
    }

}
