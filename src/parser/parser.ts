import { matchEuroJackPot } from '../constants/constants';
import { IResultData } from '../types/types';

const formatterCurrency = (currency: string): any =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    });

const formatterWinners = (winners: number): string => new Intl.NumberFormat('en-US').format(winners);

const formatterRoman = (num: number): string => {
    let roman = "";
    const romanNumList: any = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let a;

    for(const key in romanNumList){
        if (romanNumList) {
            a = Math.floor(num / romanNumList[key]);
            if(a >= 0){
                for(let i = 0; i < a; i++){
                    roman += key;
                }
            }
            num = num % romanNumList[key];
        }
    }

    return roman;
};

export const dataParser = (data: any): IResultData => {
    const result = data.last[0];
    const { currency, numbers, euroNumbers } = result;
    const ranks = Object.keys(result.odds)
        .filter((oddKey) => oddKey !== 'rank0')
        .map((oddKey) => ({
            tier: oddKey,
            ...result.odds[oddKey],
        }))
        .sort((a, b) => {
            const comp = Number(a.tier.match(/(\d+)/g)[0]) <= Number(b.tier.match(/(\d+)/g)[0]);
            return comp ? -1 : 1;
        })
        .map((item, index) => ({
            tier: formatterRoman(index + 1),
            match: matchEuroJackPot[index],
            winners: `${formatterWinners(item.winners)}x`,
            amount: item.prize === 0 ? 'No hits' : formatterCurrency(currency).format(item.prize / 100),
        }));

    const columns = Object.keys(ranks[0]).map((key) => ({
        label: `${key[0].toUpperCase()}${key.slice(1)}`,
    }));

    return { dataHeader: columns, dataResult: ranks, numbers, euroNumbers };
};

export default dataParser;
