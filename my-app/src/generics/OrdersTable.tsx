import React, {FunctionComponent} from 'react';
import './styles/OrdersTable.scss'
import {Scope, SideText, Titles} from "../utils/enum";
import {formatToCustomDecimal, generateRandomKey} from "../utils/formatter";

interface IProps {
    columns: string[];
    rows: any;
    scope: string;
    decimalGroupBy: number
}

const OrdersTable: FunctionComponent<IProps> = ({
 columns,
 rows,
 scope,
 decimalGroupBy,
}) => {
    const title =  scope && scope === Scope.buy ? Titles.BUY : Titles.SELL;
    const sideText =  scope && scope === Scope.buy ? SideText.buy : SideText.sell;
    return (
        <div className="tableContainer">
            <div className="tableTitle">{title}</div>
            <div className="tableRow gray mainRow">
            {columns.map((column) =>
                <div className='cell' key={column}>{column}</div>
            )}
            </div>
            {rows?.map((row: any, index: number) =>
                <div  key={generateRandomKey()} className="tableRow gray highlight">
                    <div  key={generateRandomKey()} className={`cell bold ${scope}`}>{sideText} {index + 1}</div>
                    <div  key={generateRandomKey()} className='cell' >{formatToCustomDecimal(row.price, decimalGroupBy)}</div>
                    <div  key={generateRandomKey()} className='cell'>{row.quantity}{index}</div>
                    <div  key={generateRandomKey()} className='cell'>{row.total}</div>
                </div>
            )}
        </div>
    );
};

export default OrdersTable;