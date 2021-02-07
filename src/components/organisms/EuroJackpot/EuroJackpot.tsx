import * as React from 'react';
import { MainContainer, HeaderContainer, TitleContainer, SelectView, ResultContainer } from './EuroJackpot.styles';
import DropdownDual from '../../molecules/DropdownDual';
import Browse from '../../molecules/Browse';
import Numbers from '../../molecules/Numbers';

const EuroJackpot = (): any => {
    const dataHeader = [{ label: 'Tier' }, { label: 'Match' }, { label: 'Winners' }, { label: 'Amount' }];
    const dataResult1 = [
        { tier: 'I', match: ' 5 Numbers + 2 Euronumbers', winners: '1x', amount: '€11,023,761.80' },
        { tier: 'II', match: ' 5 Numbers + 1 Euronumbers', winners: '6x', amount: '€322,395.30' },
    ];
    const dataResult2 = [
        { tier: 'III', match: ' 4 Numbers + 2 Euronumbers', winners: '1x', amount: '€4343434' },
        { tier: 'IV', match: ' 3 Numbers + 1 Euronumbers', winners: '6x', amount: '€78' },
        { tier: 'V', match: ' 2 Numbers + 1 Euronumbers', winners: '6x', amount: '€5' },
    ];
    const numbers = [5, 67, 8, 2, 88];
    const euroNumbers = [99, 17];

    const [winnersResult, setWinnersResult] = React.useState([]);
    const [currentDate, setCurrentDate] = React.useState('');

    const onChangeHandle = (value: string) => {
        console.log('CHANGE DUAL --> ', value);
        setCurrentDate(value);
        setWinnersResult(dataResult2);
    };

    React.useEffect(() => {
        setWinnersResult(dataResult1);
    }, []);

    return (
        <MainContainer>
            <HeaderContainer>
                <TitleContainer>EUROJACKPOT RESULTS & WINNING NUMBERS</TitleContainer>
                <SelectView>
                    <DropdownDual onChange={(value: string) => onChangeHandle(value)} />
                </SelectView>
            </HeaderContainer>
            <ResultContainer>
                <Numbers currentDate={currentDate} numbers={numbers} euroNumbers={euroNumbers} />
                <Browse dataHeader={dataHeader} dataResult={winnersResult} />
            </ResultContainer>
        </MainContainer>
    );
};

export default EuroJackpot;
