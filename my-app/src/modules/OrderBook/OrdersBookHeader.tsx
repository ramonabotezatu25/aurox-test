import React, {FunctionComponent} from 'react';
import SearchedBar from "./SearchedBar";
import GroupByDropDown from "../../generics/GroupByDropDown";
import {orderByDecimals, orderByDepth} from "../../utils/currencies";
import store from "../../store/store";
import {setGroupByDecimalCount, setViewByDepthCount} from "../../store/actions/dataAction";

interface IProps {
    symbols: string[];
}
const OrdersBookHeader: FunctionComponent<IProps> = ({
    symbols,
}) => {

    const dispatchViewByDepth = (depth: number) => {
        store.dispatch(setViewByDepthCount(depth));
    };

    const dispatchGroupByDecimal = (decimal: number) => {
        store.dispatch(setGroupByDecimalCount(decimal));
    };

    return (
        <div className = 'orderBookHeaderContainer'>
            <div className= "orderBookHeader">
                <div className="title"> Order Book </div>
                <SearchedBar symbols={symbols}/>
                <GroupByDropDown
                    input={orderByDecimals}
                    defaultValue={orderByDecimals[2]}
                    actionToDispatch={(param) => dispatchGroupByDecimal(param)}
                    defaultInputLabel="Group"
                    additionalText = "decimals"
                />
                <GroupByDropDown
                    input={orderByDepth}
                    defaultValue={orderByDepth[0]}
                    actionToDispatch={(param) => dispatchViewByDepth(param)}
                    defaultInputLabel="Depth"
                />
            </div>
        </div>
    );
};

export default OrdersBookHeader;