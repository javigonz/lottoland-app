import * as React from 'react';
import { MainContainer, EuroJackpotContainer } from './EuroJackpot.styles';
import DropdownDual from '../../molecules/DropdownDual';

const EuroJackpot = (): any => {
    const onChangeHandle = (value: string) => {
        console.log('CHANGE DUAL --> ', value);
    };

    return (
        <MainContainer>
            <EuroJackpotContainer>
                <DropdownDual
                    onChange={(value: string) => onChangeHandle(value)}
                />
            </EuroJackpotContainer>
        </MainContainer>
    );
};

export default EuroJackpot;
