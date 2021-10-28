import React, {FunctionComponent} from 'react';
import OrdersBookHeader from "./OrdersBookHeader";
import {currencies} from "../../utils/currencies";
import './styles/OrderBook.scss'
import OrderBookContent from "./OrderBookContent";
import {connect} from "react-redux";
import {IDataState, IStream} from "../../interfaces";

interface IProps {
    stream: IStream;
    decimalGroupBy: number;
    depthViewCount: number;
}

const OrderBookContainer: FunctionComponent<IProps> = ({
    stream,
    decimalGroupBy,
    depthViewCount,
}) => {
    const symbols = currencies;
    return (
        <div className="orderBookContainer">
            <OrdersBookHeader symbols={symbols}/>
            <OrderBookContent stream={stream} decimalGroupBy={decimalGroupBy} depthViewCount={depthViewCount}/>
        </div>
    );
};

function mapStateToProps(state: IDataState) {
    return {
        stream: state.data.stream,
        decimalGroupBy: state.data.decimalGroupBy,
        depthViewCount: state.data.depthViewCount,
    }
}

export default connect(mapStateToProps)(OrderBookContainer);