import axios from "axios"
import {formatSymbol} from "../formatter";
import {setDepthData, setLastStatusDepthResp} from "../../store/actions/dataAction";
import store from "../../store/store";

export const getData = async (symbol) => {
    //: https://api.binance.com/api/v3/depth
    //Data is returned in ascending order. Oldest first, newest last.
    // All time and timestamp related fields are in milliseconds.
    // HTTP 429 return code is used when breaking a request rate limit.
    // HTTP 418 return code is used when an IP has been auto-banned for continuing to send requests after receiving 429 codes.
    // For GET endpoints, parameters must be sent as a query string.
    const {lastDepthResponse: lastResponse} = store.getState()?.data;
    if (symbol && lastResponse !== 429) {
        await axios.get('https://api1.binance.com/api/v3/depth', {
            params: {
                symbol: formatSymbol(symbol, "USDT"), //hardcoded for the moment
                limit: 50,
            },
        }).then((response) => {
                if (response) {
                    const {status, data} = response;
                    store.dispatch(setLastStatusDepthResp(status));
                    store.dispatch(setDepthData(data));
                }
            });
    }
};