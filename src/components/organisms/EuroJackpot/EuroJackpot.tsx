import * as React from 'react';
import { MainContainer, HeaderContainer, TitleContainer, SelectView } from './EuroJackpot.styles';
import DropdownDual from '../../molecules/DropdownDual';

const EuroJackpot = (): any => {
    const onChangeHandle = (value: string) => {
        console.log('CHANGE DUAL --> ', value);
    };

    return (
        <MainContainer>
            <HeaderContainer>
                <TitleContainer>EUROJACKPOT RESULTS & WINNING NUMBERS</TitleContainer>
                <SelectView>
                    <DropdownDual onChange={(value: string) => onChangeHandle(value)} />
                </SelectView>
            </HeaderContainer>
        </MainContainer>
    );
};

export default EuroJackpot;
