import {dataType} from '../actionTypes/dataActionType'

export const setSearchedSymbol = (symbol: string) => {
    return {
        type: dataType.SET_SEARCH_BY_SYMBOL,
        payload: symbol,
    }
};

export const setLastStatusDepthResp = (status: number) => {
    return {
        type: dataType.SET_LAST_STATUS_DEPTH_RESP,
        payload: status,
    }
};

export const setDepthData = (data: any) => {
    return {
        type: dataType.SET_DEPTH_DATA,
        payload: data,
    }
};

export const setStreamData = (streamMessage: any) => {
    return {
        type: dataType.SET_STREAM_DATA,
        payload: streamMessage,
    }
};

export const setGroupByDecimalCount = (decimalCount: number) => {
    return {
        type: dataType.SET_DECIMAL_GROUP_BY,
        payload: decimalCount,
    }
};

export const setViewByDepthCount = (depth: number) => {
    return {
        type: dataType.SET_DEPTH_VIEW_COUNT,
        payload: depth,
    }
};

