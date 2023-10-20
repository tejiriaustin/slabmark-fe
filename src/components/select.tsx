import {
    Select as SelectComponent,
    SelectProps as SelectComponentProps
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export interface SelectProps extends SelectComponentProps {
    options: Array<{
        name: string;
        value: string;
    }>
    handleChange?:(value: string) => void;
    value?: string | number | null;
}

const SelectButton = ({options, defaultValue, value: propValue = "", handleChange, ...rest}: SelectProps) => {
    const [value, setValue] = useState(propValue);

    useEffect(() => {
        if (handleChange) {
            handleChange(value);
        }
    }, [handleChange, value, setValue]);

    useEffect(() => {
        setValue(propValue);
    }, [setValue, propValue]);
    console.log("Select", value);

    return (
        <SelectComponent
            {...rest}
            value={value}
            onChange={(event) => {
                setValue(event?.target?.value);
            }}
        >
            {options.map(({value: currentValue, name}, index) => {
                <option key={index} value={currentValue}>
                    {name}
                </option>
            })}
        </SelectComponent>
    )
}

export default SelectButton;