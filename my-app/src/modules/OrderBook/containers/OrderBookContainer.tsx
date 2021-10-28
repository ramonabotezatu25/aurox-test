import React, {FunctionComponent} from 'react';
import OrdersBookHeader from "../OrdersBookHeader";
import {currencies} from "../../../utils/constants";
import '../styles/OrderBook.scss'
import {connect} from "react-redux";
import {IDataState, IStream} from "../../../interfaces";
import OrderBookContent from "../OrderBookContent";


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
    return (
        <div className="orderBookContainer">
            <OrdersBookHeader symbols={currencies}/>
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