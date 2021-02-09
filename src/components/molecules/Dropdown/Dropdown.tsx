import React from 'react';
import DropDownSimple from './Dropdown.styles';
import { IOption, IDropdownProps } from '../../../types/types';

export const Dropdown = (props: IDropdownProps): React.ReactElement => {
    const { options, selected, onChange } = props;
    return (
        <DropDownSimple
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.currentTarget.value)}
            defaultValue={selected}
        >
            {options.map((option: IOption) => {
                const { label, value } = option;
                return (
                    <option key={value} value={value}>
                        {label}
                    </option>
                );
            })}
        </DropDownSimple>
    );
};

export default Dropdown;
