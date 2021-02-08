import { dataParser } from './parser';
import { getMockData } from './mockData';

describe('parser', () => {
    it('WHEN call dataParser function THEN should return data parsed', () => {
        const data = getMockData();
        const parsedData = dataParser(data);

        expect(parsedData.dataHeader).toBeDefined();
        expect(parsedData.dataResult).toBeDefined();
        expect(parsedData.numbers).toBeDefined();
        expect(parsedData.euroNumbers).toBeDefined();

        expect(parsedData.dataHeader[0].label).toBe('Tier');
        expect(parsedData.dataHeader[1].label).toBe('Match');
        expect(parsedData.dataHeader[2].label).toBe('Winners');
        expect(parsedData.dataHeader[3].label).toBe('Amount');

        expect(parsedData.dataResult[0].tier).toBe('I');
        expect(parsedData.dataResult[1].winners).toBe('6x');
        expect(parsedData.dataResult[2].amount).toBe('€11,378,650.00');

        expect(parsedData.numbers).toEqual([2, 3, 16, 33, 46]);

        expect(parsedData.euroNumbers).toEqual([2, 10]);
    });
});
