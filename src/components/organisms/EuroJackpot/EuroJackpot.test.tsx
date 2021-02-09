import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import EuroJackpot, { IEuroJackpotProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const dataHeader = [{ label: 'Tier' }, { label: 'Match' }, { label: 'Winners' }, { label: 'Amount' }];
const dataResult = [
    { tier: 'I', match: '5 Numbers + 2 Euronumbers', winners: '1x', amount: '€11,023,761.80' },
    { tier: 'II', match: '5 Numbers + 1 Euronumbers', winners: '8x', amount: '€322,395.30' },
];
const resultData = {
        dataHeader,
        numbers: [1,2],
        euroNumbers: [4,5],
        dataResult,
    };

const defaultProps: IEuroJackpotProps = {
    initialData: resultData,
};

describe('EuroJackpot Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IEuroJackpotProps = defaultProps) => {
        component = mount(<EuroJackpot {...defaultProps} {...props} />);
    };

    describe('Init', () => {
        it('WHEN component is rendering SHOULD defined component properly', () => {
            renderComponent();

            expect(component).toBeDefined();
        });

        it('WHEN component is setting SHOULD render DropdownDual and Dropdown components', () => {
            renderComponent();

            expect(component.find('DropdownDual').length).toEqual(1);
            expect(component.find('Dropdown').length).toEqual(2);
        });

        it('WHEN component is setting without data SHOULD not render a browse component', () => {
            const initData = {
                dataHeader: [],
                numbers: [],
                euroNumbers: [],
                dataResult: [],
            };
            renderComponent({ initialData: initData });

            expect(component.find('span').props().children).toEqual('Loading winners, please wait ...');
        });

        it('WHEN component is setting with data SHOULD render a properly browse', () => {
            renderComponent();

            expect(component.find('Browse').find('TableCell').at(0).props().children).toEqual('Tier');
            expect(component.find('Browse').find('TableCell').at(1).props().children).toEqual('Match');
            expect(component.find('Browse').find('TableCell').at(2).props().children).toEqual('Winners');
            expect(component.find('Browse').find('TableCell').at(3).props().children).toEqual('Amount');

            expect(component.find('Browse').find('TableCell').at(4).props().children).toEqual('I');
            expect(component.find('Browse').find('TableCell').at(5).props().children).toEqual('5 Numbers + 2 Euronumbers');
            expect(component.find('Browse').find('TableCell').at(6).props().children).toEqual('1x');
            expect(component.find('Browse').find('TableCell').at(7).props().children).toEqual('€11,023,761.80');

            expect(component.find('Browse').find('TableCell').at(8).props().children).toEqual('II');
            expect(component.find('Browse').find('TableCell').at(9).props().children).toEqual('5 Numbers + 1 Euronumbers');
            expect(component.find('Browse').find('TableCell').at(10).props().children).toEqual('8x');
            expect(component.find('Browse').find('TableCell').at(11).props().children).toEqual('€322,395.30');
        });
    });
});
