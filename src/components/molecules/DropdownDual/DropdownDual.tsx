import React from 'react';
import { DropdownContainer } from './DropdownDual.styles';
import Dropdown from '../Dropdown';
import getFridaysByYear from '../../../helpers/date.helpers';
import optionsYears from '../../../constants/constants';

export interface IOption {
    value: string;
    label: string;
}

export interface IDropdownDualProps {
    onChange: (value: string) => void;
}

export const DropdownDual = (props: IDropdownDualProps): React.ReactElement => {
    const [optionsByFridays, setOptionsByFridays] = React.useState([]);
    const { onChange } = props;

    const onChangeHandleYear = (year: string) => {
        const fridaysByYear = getFridaysByYear(year);
        fridaysByYear.unshift({ label: 'Please select', value: '', disabled: true });
        setOptionsByFridays(fridaysByYear);
    };

    React.useEffect(() => {
        const fridaysByYear = getFridaysByYear(optionsYears[0].value);
        setOptionsByFridays(fridaysByYear);
        onChange(fridaysByYear[0].value);
    }, []);

    return (
        <DropdownContainer>
            <Dropdown options={optionsByFridays} selected="" onChange={(value: string) => onChange(value)} />
            <Dropdown
                options={optionsYears}
                selected={optionsYears[0].label}
                onChange={(value: string) => onChangeHandleYear(value)}
            />
        </DropdownContainer>
    );
};

export default DropdownDual;
