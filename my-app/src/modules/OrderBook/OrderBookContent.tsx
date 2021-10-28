import React, {FunctionComponent} from 'react';
import OrdersTable from "../../generics/OrdersTable";
import './styles/OrderBook.scss'
import {formatAsksArray} from "../../utils/formatter";
import {IStream} from "../../interfaces";

interface IProps {
    stream: IStream;
    decimalGroupBy: number;
    depthViewCount: number;
}

const OrderBookContent: FunctionComponent<IProps> = ({
    stream,
    decimalGroupBy,
    depthViewCount,
}) => {
    const asks = stream?.a;
    const bids = stream?.b;
    const columns = ["Side", 'Price(USDT)', 'Amount(BTC)', 'Total(USDT)'];
    const buyRows  = formatAsksArray(asks, depthViewCount);
    const sellRows  = formatAsksArray(bids, depthViewCount);

    return (
        <div className="contentTableContainer">
           <OrdersTable scope="buy" columns={columns} rows={buyRows} decimalGroupBy={decimalGroupBy}/>
           <OrdersTable scope="sell" columns={columns} rows={sellRows} decimalGroupBy={decimalGroupBy}/>
        </div>
    );
};


export default OrderBookContent;