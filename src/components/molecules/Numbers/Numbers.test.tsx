import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Numbers from './index';
import { INumbersProps } from '../../../types/types';
import { getReadableDateFormat } from '../../../helpers/date.helpers';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../../helpers/date.helpers', () => {
    return {
        getReadableDateFormat: () => '08 Jan 2021',
    };
});

const defaultProps: INumbersProps = {
    numbers: [5, 67, 8, 2, 88],
    euroNumbers: [99, 17],
    currentDate: '20210108',
};

describe('Numbers Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: INumbersProps = defaultProps) => {
        component = mount(<Numbers {...defaultProps} {...props} />);
    };

    describe('Render', () => {
        it('WHEN component is rendering SHOULD have instance', () => {
            renderComponent();
            expect(component).toBeDefined();
        });

        it('WHEN set numbers props SHOULD render Labels properly', () => {
            renderComponent();

            expect(component.find('Label').at(0).props().children).toBe(5);
            expect(component.find('Label').at(1).props().children).toBe(67);
            expect(component.find('Label').at(2).props().children).toBe(8);
            expect(component.find('Label').at(3).props().children).toBe(2);
            expect(component.find('Label').at(4).props().children).toBe(88);
            expect(component.find('Label').at(5).props().children).toBe(99);
            expect(component.find('Label').at(6).props().children).toBe(17);
        });

        it('WHEN set currentDate props SHOULD render Header properly', () => {
            renderComponent();

            expect(component.find('Header').at(0).props().children).toBe('EuroJackpot Results for Friday 08 Jan 2021');
        });
    });
});
