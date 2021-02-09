import React from 'react';
import { Label, Header } from 'semantic-ui-react';
import { NumbersContainer } from './Numbers.styles';
import { getReadableDateFormat } from '../../../helpers/date.helpers';
import { INumbersProps } from '../../../types/types';

export const Numbers = (props: INumbersProps): React.ReactElement => {
    const { numbers = [], euroNumbers = [], currentDate } = props;

    return (
        <NumbersContainer>
            <Header size="small">{`EuroJackpot Results for Friday ${getReadableDateFormat(currentDate)}`}</Header>
            {numbers.map((numberItem) => (
                <Label circular size="big" color="grey" key={`numberkey-${numberItem}`}>
                    {numberItem}
                </Label>
            ))}
            {euroNumbers.map((euroNumber) => (
                <Label circular size="big" color="brown" key={`euronumberkey-${euroNumber}`}>
                    {euroNumber}
                </Label>
            ))}
        </NumbersContainer>
    );
};

export default Numbers;
