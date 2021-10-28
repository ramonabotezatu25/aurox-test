import {dataType} from "../actionTypes/dataActionType"
import {orderStreamMessages} from "../../utils/formatter";

export const INITIAL_STATE = {
    snapshot: {
        asks: [],
        bids: [],
        lastUpdatedId: -1,
    },
    currentSymbol: '',
    lastDepthResponse: -1,
    stream: {},
    decimalGroupBy: 2, //default value
    depthViewCount: 10, //default value
};

const dataReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case dataType.SET_SEARCH_BY_SYMBOL: {
            return {
                ...state,
                currentSymbol: payload
            }
        }
        case dataType.SET_LAST_STATUS_DEPTH_RESP: {
            return  {
                ...state,
                lastDepthResponse: payload,

            }
        }
        case dataType.SET_DEPTH_DATA: {
            return  {
                ...state,
                snapshot: payload,
                stream: {
                    ...state.stream,
                    a: payload?.asks,
                    b: payload?.bids, //first snapshot will be add in stream arrays
                }
            }
        }
        case dataType.SET_STREAM_DATA: {
            return {
                ...state,
                stream: {
                    a : orderStreamMessages(state.stream?.a, payload?.a, state.depthViewCount),
                    b : orderStreamMessages(state.stream?.b, payload?.b, state.depthViewCount),
                }
            }
        }
        case dataType.SET_DECIMAL_GROUP_BY: {
            return  {
                ...state,
                decimalGroupBy: payload
            }
        }
        case dataType.SET_DEPTH_VIEW_COUNT: {
            return  {
                ...state,
                depthViewCount: payload
            }
        }
        default:
            return state

    }
};

export default dataReducer;