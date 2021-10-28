import React, {FunctionComponent} from 'react';
import SearchedBar from "./SearchedBar";
import store from "../../store/store";
import {setGroupByDecimalCount, setViewByDepthCount} from "../../store/actions/dataAction";
import CustomDropDown from "../../generics/CustomDropDown";
import {orderByDecimals, orderByDepth} from "../../utils/constants";

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
                <CustomDropDown
                    input={orderByDecimals}
                    defaultValue={orderByDecimals[2]}
                    actionToDispatch={(param) => dispatchGroupByDecimal(param)}
                    defaultInputLabel="Group"
                    additionalText = "decimals"
                    id="dropDownCustomDecimal"
                />
                <CustomDropDown
                    input={orderByDepth}
                    defaultValue={orderByDepth[0]}
                    actionToDispatch={(param) => dispatchViewByDepth(param)}
                    defaultInputLabel="Depth"
                    id="dropDownCustomDepth"
                />
            </div>
        </div>
    );
};

export default OrdersBookHeader;