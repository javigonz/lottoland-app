import * as React from 'react';
import { MainContainer, HeaderContainer, TitleContainer, SelectView, ResultContainer } from './EuroJackpot.styles';
import DropdownDual from '../../molecules/DropdownDual';
import Browse from '../../molecules/Browse';
import Numbers from '../../molecules/Numbers';
import { get } from '../../../services/api';

export interface IResultData {
    dataHeader: any[];
    numbers: number[];
    euroNumbers: number[];
    dataResult: any[];
};

export interface IEuroJackpotProps {
    initialData?: IResultData
};

const EuroJackpot = (props: IEuroJackpotProps): React.ReactElement => {
    const initData = {
        dataHeader: [],
        numbers: [],
        euroNumbers: [],
        dataResult: [],
    };
    const { initialData = initData } = props;
    const [currentDate, setCurrentDate] = React.useState('');
    const [resultData, setResultData] = React.useState(initialData);

    const onChangeHandle = (value: string) => {
        setCurrentDate(value);
    };

    React.useEffect(() => {
        const getData = async () => {
            if (currentDate) {
                const result = await get(currentDate);
                setResultData(result);
            };
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
            {resultData?.dataResult.length === 0 ? (
                <span>Loading winners, please wait ...</span>
            ) : (
                <ResultContainer>
                    <Numbers currentDate={currentDate} numbers={resultData?.numbers} euroNumbers={resultData?.euroNumbers} />
                    <Browse dataHeader={resultData?.dataHeader} dataResult={resultData?.dataResult} />
                </ResultContainer>
            )}
        </MainContainer>
    );
};

export default EuroJackpot;
