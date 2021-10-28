import React, {FunctionComponent, useEffect} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {getData} from "../../utils/requests/requests";
import store from "../../store/store";
import {setSearchedSymbol} from "../../store/actions/dataAction";

interface IProps {
    symbols: string[];
}

const SearchedBar: FunctionComponent<IProps> = ({
    symbols,
}) => {
    const [symbol, setSymbol] = React.useState('');

    const handleChange = (event: any) => {
        setSymbol(event.target.value);
    };

    useEffect(() => {
        setSymbol(symbols[0]);
    },[]);

    useEffect(() => {
        if (symbol) {
            store.dispatch(setSearchedSymbol(symbol));
            getData(symbol);
        }
    },[symbol]);
    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={symbol}
                    onChange={handleChange}
                >
                    {symbols.map((symbol, index) =>  <MenuItem key={`${symbol}-${index}`} value={symbol}>{symbol}/USDT</MenuItem> )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SearchedBar;