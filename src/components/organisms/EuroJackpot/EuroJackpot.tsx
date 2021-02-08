import * as React from 'react';
import { MainContainer, HeaderContainer, TitleContainer, SelectView, ResultContainer } from './EuroJackpot.styles';
import DropdownDual from '../../molecules/DropdownDual';
import Browse from '../../molecules/Browse';
import Numbers from '../../molecules/Numbers';
import { get } from '../../../services/api';

const EuroJackpot = () => {
    const [currentDate, setCurrentDate] = React.useState('');
    const [data, setData] = React.useState(null);

    const onChangeHandle = (value: string) => {
        setCurrentDate(value);
    };

    React.useEffect(() => {
        const getData = async () => {
            const result = currentDate ? await get(currentDate) : null;
            setData(result);
        };
        getData();
    }, [currentDate]);

    return (
        <MainContainer>
            <HeaderContainer>
                <TitleContainer>EUROJACKPOT RESULTS & WINNING NUMBERS</TitleContainer>
                <SelectView>
                    <DropdownDual onChange={(value: string) => onChangeHandle(value)} />
                </SelectView>
            </HeaderContainer>
            {!data ? (
                <span>Loading winners, please wait ...</span>
            ) : (
                <ResultContainer>
                    <Numbers currentDate={currentDate} numbers={data?.numbers} euroNumbers={data?.euroNumbers} />
                    <Browse dataHeader={data?.dataHeader} dataResult={data?.dataResult} />
                </ResultContainer>
            )}
        </MainContainer>
    );
};

export default EuroJackpot;
