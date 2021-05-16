import axios from "axios"

// API from: https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday
export async function getTickerHistoricalPrice(){

    let api_url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&api_key=" + "cc61fbdbd2735f2b9f844da1ef6f06f35da34427fec26a9549878a8041547624"
    const response = await axios.get(api_url)
    console.log("Fetched api data")
    console.log(response)
    return response
}