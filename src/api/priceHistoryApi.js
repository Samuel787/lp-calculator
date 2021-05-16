import axios from "axios"

/**
 * @param {*} ticker 
 * 
 * List of valid tickers:
 * [["1INCH:USD","1INCH:UST","AAABBB","AAVE:USD","AAVE:UST","ADABTC","ADAUSD","ADAUST","ALBT:USD",
 * "ALBT:UST","ALGBTC","ALGUSD","ALGUST","AMPBTC","AMPUSD","AMPUST","ANTBTC","ANTETH","ANTUSD","ATOBTC",
 * "ATOETH","ATOUSD","AVAX:USD","AVAX:UST","B21X:USD","B21X:UST","BALUSD","BALUST","BAND:USD","BAND:UST",
 * "BATBTC","BATETH","BATUSD","BCHABC:USD","BCHN:USD","BEST:USD","BFTUSD","BMIUSD","BMIUST","BNTUSD",
 * "BOSON:USD","BOSON:UST","BSVBTC","BSVUSD","BTC:CNHT","BTCEUR","BTCGBP","BTCJPY","BTCUSD","BTCUST",
 * "BTCXCH","BTGBTC","BTGUSD","BTSE:USD","BTTUSD","CELUSD","CELUST","CHZUSD","CHZUST","CLOUSD","CNH:CNHT",
 * "COMP:USD","COMP:UST","CTKUSD","CTKUST","DAIBTC","DAIETH","DAIUSD","DAPP:USD","DAPP:UST","DATBTC",
 * "DATUSD","DGBUSD","DGXUSD","DOGBTC","DOGE:USD","DOGE:UST","DOGUSD","DOGUST","DOTBTC","DOTUSD","DOTUST",
 * "DSHBTC","DSHUSD","DUSK:BTC","DUSK:USD","EDOBTC","EDOETH","EDOUSD","EGLD:USD","EGLD:UST","ENJUSD",
 * "EOSBTC","EOSDT:USD","EOSDT:UST","EOSETH","EOSEUR","EOSGBP","EOSJPY","EOSUSD","EOSUST","ESSUSD","ETCBTC",
 * "ETCUSD","ETH2X:ETH","ETH2X:USD","ETH2X:UST","ETHBTC","ETHEUR","ETHGBP","ETHJPY","ETHUSD","ETHUST",
 * "ETPBTC","ETPETH","ETPUSD","EUSBTC","EUSUSD","EUTEUR","EUTUSD","EUTUST","EXRD:BTC","EXRD:USD","FETUSD",
 * "FETUST","FILUSD","FILUST","FORTH:USD","FORTH:UST","FTTUSD","FTTUST","FUNUSD","GNOUSD","GNTUSD","GOTEUR",
 * "GOTUSD","GTXUSD","GTXUST","HEZUSD","HEZUST","ICEUSD","IDXBTC","IDXUSD","IOTBTC","IOTETH","IOTEUR","IOTGBP",
 * "IOTJPY","IOTUSD","IQXUSD","IQXUST","JSTBTC","JSTUSD","JSTUST","KANUSD","KANUST","KNCBTC","KNCUSD","KSMUSD",
 * "KSMUST","LEOBTC","LEOEOS","LEOETH","LEOUSD","LEOUST","LINK:USD","LINK:UST","LRCUSD","LTCBTC","LTCUSD",
 * "LTCUST","LUNA:USD","LUNA:UST","LYMUSD","MKRUSD","MLNUSD","MNABTC","MNAUSD","MOBUSD","MOBUST","NEAR:USD",
 * "NEAR:UST","NECUSD","NEOBTC","NEOETH","NEOEUR","NEOGBP","NEOJPY","NEOUSD","NUTUSD","ODEUSD","OMGBTC","OMGETH"
 * ,"OMGUSD","OMNBTC","OMNUSD","ORSUSD","OXYUSD","OXYUST","PASUSD","PAXUSD","PAXUST","PLUUSD","PNKETH","PNKUSD"
 * ,"POAUSD","QSHUSD","QTMBTC","QTMUSD","RBTBTC","RBTUSD","REPBTC","REPUSD","REQUSD","RINGX:USD","RRBUSD","RRBUST"
 * ,"RRTUSD","SANBTC","SANETH","SANUSD","SNGUSD","SNTUSD","SNXUSD","SNXUST","SOLUSD","SOLUST","STJUSD","SUKU:USD"
 * ,"SUKU:UST","SUNUSD","SUNUST","SUSHI:USD","SUSHI:UST","TESTBTC:TESTUSD","TESTBTC:TESTUSDT","TRXBTC","TRXETH",
 * "TRXEUR","TRXUSD","TSDUSD","TSDUST","UDCUSD","UDCUST","UNIUSD","UNIUST","UOPUSD","UOPUST","UOSBTC","UOSUSD",
 * "USKUSD","UST:CNHT","USTUSD","UTKUSD","VEEUSD","VETBTC","VETUSD","VSYBTC","VSYUSD","WAXUSD","WBTUSD","XAUT:BTC",
 * "XAUT:USD","XAUT:UST","XCHUSD","XDCUSD","XDCUST","XLMBTC","XLMETH","XLMUSD","XLMUST","XMRBTC","XMRUSD","XMRUST",
 * "XRAUSD","XRPBTC","XRPUSD","XRPUST","XSNUSD","XTZBTC","XTZUSD","XVGUSD","YFIUSD","YFIUST","YGGUSD","YYWUSD","ZBTUSD",
 * "ZCNUSD","ZECBTC","ZECUSD","ZILBTC","ZILUSD","ZRXBTC","ZRXETH","ZRXUSD"]]
 * @param {*} start 
 * @param {*} end 
 */
export async function getTickerHistoricalPrice(ticker, limit = null, start = null, end = null){
    let symbol = "t" + ticker
    // validate the ticker symbol
    let api_url = "https://api-pub.bitfinex.com/v2/tickers/hist?symbols=" + symbol
    
    // add in limit
    if(limit !== null){
        if(limit > 250){
            limit = 250 // max data
        } else if(limit < 0){
            limit = 0
        }
        api_url += "&limit=" + limit
    }
    
    // add in start
    if(start !== null){
        api_url += "&start=" + start
    }

    // add in end
    if(end !== null){
        api_url += "&end=" + end
    }
    console.log(api_url)
    const response = await axios.get(api_url)

    // manipulate the data
    console.log("Fetched api data")


    return response
}