import { extendMoment } from 'moment-range';
import { getFridaysByYear, getReadableDateFormat } from './date.helpers';

jest.mock('moment', () => {
    return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

jest.mock('moment-range');
extendMoment.mockImplementation(() => {
    return jest.fn(() => ({
        year: jest.fn(() => 2022),
        format: jest.fn(),
        range: jest.fn(() => {}),
    }));
});

describe('Date helpers', () => {
    it('WHEN call getFridaysByYear SHOULD return empty prop', () => {
        const fridays = getFridaysByYear('2021');

        expect(fridays).toEqual([]);
    });

    it('WHEN call getReadableDateFormat SHOULD return date in a properly format', () => {
        const fridays = getReadableDateFormat('2021');

        expect(fridays).toEqual('01 Jan 2020');
    });
});
