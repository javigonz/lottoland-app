import React from 'react';
import { DropdownContainer } from './DropdownDual.styles';
import Dropdown from '../Dropdown';
// eslint-disable-next-line import/no-cycle
import { getFridaysByYear } from '../../../helpers/date.helpers';
import { optionsYears } from '../../../constants/constants';
import { IDropdownDualProps, IOption } from '../../../types/types';

export const DropdownDual = (props: IDropdownDualProps): React.ReactElement => {
    const initFridays: IOption[] = [];
    const [optionsByFridays, setOptionsByFridays] = React.useState(initFridays);
    const { onChange } = props;

    const onChangeHandleYear = (year: string) => {
        const fridaysByYear: IOption[] = getFridaysByYear(year);
        fridaysByYear.unshift({ label: 'Please select', value: '', disabled: true });
        setOptionsByFridays(fridaysByYear);
    };

    React.useEffect(() => {
        const fridaysByYear: IOption[] = getFridaysByYear(optionsYears[0].value);
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
