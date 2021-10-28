import React, {FunctionComponent} from 'react';
import './styles/OrdersTable.scss'
import {formatToCustomDecimal, generateRandomKey} from "../utils/formatter";
import {Scope, SideText, Titles} from "../utils/constants";

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
    const info = scope && scope === Scope.buy ?
        {
            title: Titles.BUY,
            sideTexT: SideText.buy,
        } :
        {
            title: Titles.SELL,
            sideTexT: SideText.sell,
        };
    return (
        <div className="tableContainer">
            <div className="tableTitle">{info.title}</div>
            <div className="tableRow gray mainRow">
                {columns.map((column) =>
                    <div className='cell' key={column}>{column}</div>
                )}
            </div>
            {rows?.map((row: any, index: number) =>
                <div key={generateRandomKey()} className={`tableRow gray  highlight-${scope}`}>
                    <div key={generateRandomKey()} className={`cell bold ${scope}`}>{info.sideTexT} {index + 1}</div>
                    <div key={generateRandomKey()}
                         className='cell'>{formatToCustomDecimal(row?.price, decimalGroupBy)}</div>
                    <div key={generateRandomKey()} className='cell'>{row?.quantity}{index}</div>
                    <div key={generateRandomKey()} className='cell'>{row?.total}</div>
                </div>
            )}
        </div>
    );
};

export default OrdersTable;