import { get } from './api';

jest.mock('../parser/parser', () => ({
    dataParser: (newData: any) => newData,
}));

const data = {
    foo: 'bar',
};

const error = {
    message: 'error',
};

describe('Api', () => {
    it('WHEN call get function THEN should return properly response', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ ...data }),
            })
        ) as any;

        const response = await get('20210205');
        expect(response).toEqual(data);
    });

    it('WHEN error THEN should return an error response', async () => {
        jest.spyOn(global.console, 'error');
        global.fetch = jest.fn(() => Promise.reject({ ...error })) as any;
        const response = await get('xxx');
        expect(console.error).toBeCalled();
    });
});
