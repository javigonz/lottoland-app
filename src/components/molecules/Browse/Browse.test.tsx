import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Browse, { IBrowseProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const dataHeader = [{ label: 'Tier' }, { label: 'Match' }, { label: 'Winners' }, { label: 'Amount' }];
const dataResult = [
    { tier: 'I', match: '5 Numbers + 2 Euronumbers', winners: '1x', amount: '€11,023,761.80' },
    { tier: 'II', match: '5 Numbers + 1 Euronumbers', winners: '6x', amount: '€322,395.30' },
];
const defaultProps: IBrowseProps = {
    dataHeader,
    dataResult,
};

describe('Browse Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IBrowseProps = defaultProps) => {
        component = mount(<Browse {...defaultProps} {...props} />);
    };

    describe('Render', () => {
        it('WHEN component is rendering SHOULD have instance', () => {
            renderComponent();
            expect(component).toBeDefined();
        });

        it('WHEN dataHeader prop SHOULD render properly header cells', () => {
            renderComponent();

            expect(component.find('TableHeaderCell').at(0).props().children).toBe('Tier');
            expect(component.find('TableHeaderCell').at(1).props().children).toBe('Match');
            expect(component.find('TableHeaderCell').at(2).props().children).toBe('Winners');
            expect(component.find('TableHeaderCell').at(3).props().children).toBe('Amount');
        });

        it('WHEN dataResult prop SHOULD render properly results cells', () => {
            renderComponent();

            const body = component.find('TableBody');
            const results = body.find('TableCell');

            expect(results.at(0).props().children).toBe('I');
            expect(results.at(1).props().children).toBe('5 Numbers + 2 Euronumbers');
            expect(results.at(2).props().children).toBe('1x');
            expect(results.at(3).props().children).toBe('€11,023,761.80');

            expect(results.at(4).props().children).toBe('II');
            expect(results.at(5).props().children).toBe('5 Numbers + 1 Euronumbers');
            expect(results.at(6).props().children).toBe('6x');
            expect(results.at(7).props().children).toBe('€322,395.30');
        });

        it('WHEN dataResult prop is empty SHOULD render empty body cells', () => {
            renderComponent({ dataResult: [], dataHeader });
            const body = component.find('TableBody');
            
            expect(body.props().children).toEqual([]);
        });

        it('WHEN dataHeader prop is empty SHOULD render empty header cells', () => {
            renderComponent({ dataHeader: [], dataResult: [] });

            expect(component.find('TableHeaderCell').length).toBe(0);
        });
    });
});
