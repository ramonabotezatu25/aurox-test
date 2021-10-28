import React, {FunctionComponent, useEffect} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface IProps {
    input: any[];
    defaultValue?: string | number;
    actionToDispatch: (arg: any) => void;
    defaultInputLabel: string;
    additionalText?: string;
}


const GroupByDropDown: FunctionComponent<IProps> = ({
    input,
    defaultValue,
    actionToDispatch,
    defaultInputLabel,
    additionalText,
}) => {
    const [decimal, setDecimals] = React.useState(defaultValue);

    const handleChange = (event: any) => {
        setDecimals(event.target.value);
    };

    useEffect(() => {
       console.log("parent child dispatch");
       if (decimal != undefined || decimal != null) {
           actionToDispatch(parseInt(String(decimal)));
       }
    },[decimal]);

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">{defaultInputLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={decimal}
                    onChange={handleChange}
                >
                    {input.map((decimal, index) =>  <MenuItem key={`${decimal}-${index}`} value={decimal}>{decimal} {additionalText}</MenuItem> )}
                </Select>
            </FormControl>
        </div>
    );
};

export default GroupByDropDown;