import React, {FunctionComponent} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface IProps {
    input: any[];
    defaultValue?: string | number;
    actionToDispatch: (arg: any) => void;
    defaultInputLabel: string;
    additionalText?: string;
    id: string;
}

const CustomDropDown: FunctionComponent<IProps> = ({
    input,
    defaultValue,
    actionToDispatch,
    defaultInputLabel,
    additionalText,
    id,
}) => {
    const [decimal, setDecimals] = React.useState(defaultValue);

    const handleChange = (event: any) => {
        const target = event.target.value;
        setDecimals(target);
        if (target !== undefined || target !== null) {
            actionToDispatch(parseInt(String(target)));
        }
    };
    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id={id}>{defaultInputLabel}</InputLabel>
                <Select
                    labelId={`${id}-labelId`}
                    id={`${id}-selectId`}
                    value={decimal}
                    onChange={handleChange}
                >
                    {input.map((decimal, index) =>  <MenuItem key={`${decimal}-${index}`} value={decimal}>{decimal} {additionalText}</MenuItem> )}
                </Select>
            </FormControl>
        </div>
    );
};

export default CustomDropDown;