import { matchEuroJackPot, keyRoman } from '../constants/constants';

const formatterCurrency = (currency: string): string =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    });

const formatterWinners = (winners: string): string => new Intl.NumberFormat('en-US').format(winners);

const formatterRoman = (num: number): string => {
    const digits = String(+num).split('');
    const key = keyRoman;
    let roman = '';
    let i = 3;
    // eslint-disable-next-line no-plusplus
    while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
};

export const dataParser = (data: any): any => {
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
