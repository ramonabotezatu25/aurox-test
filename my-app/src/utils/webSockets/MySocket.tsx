import React, {useEffect, useRef} from 'react';
import store from "../../store/store";
import {setStreamData} from "../../store/actions/dataAction";
import {formatSymbol} from "../formatter";

const MySocket = () => {
    const ws: any = useRef(null);

    useEffect(() => {
        const symbol = formatSymbol('btc', "USDT");
        ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol?.toLowerCase()}@depth`);
        ws.current.onopen = () => {
            console.log("ws opened");
        };

        return () => {
            ws?.current?.close();
        };
    }, []);


    useEffect(() => {
        console.warn("update socket");
        getMessage();
    }, [ws?.current?.onmessage]);

    const getMessage = () => {
        ws.current.onmessage = (e:any)  => {
            const message = JSON.parse(e.data);
            if (message) {
                store.dispatch(setStreamData(message));
            }
            return message;
        };
    };

    return (
        <div/>
    )
};

export default MySocket;