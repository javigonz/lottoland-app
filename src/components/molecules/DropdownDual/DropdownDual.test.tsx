import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import DropdownDual  from './index';
import { getFridaysByYear } from '../../../helpers/date.helpers';
import { IDropdownDualProps } from '../../../types/types';

Enzyme.configure({ adapter: new Adapter() });

const fridaysByYearMock = [
    { label: 'Fri  01 Jan', value: '20210101' },
    { label: 'Fri  01 Feb', value: '20210201' },
];

jest.mock('../../../helpers/date.helpers', () => {
    return {
        getFridaysByYear: () => fridaysByYearMock,
    };
});


const mockOnChange = jest.fn();
const defaultProps: IDropdownDualProps = {
    onChange: (value: string) => mockOnChange(value),
};

describe('DropdownSimple Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IDropdownDualProps = defaultProps) => {
        component = mount(<DropdownDual {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Render', () => {
        it('WHEN component is rendering SHOULD have instance', () => {
            renderComponent();
            expect(component).toBeDefined();
        });

        it('WHEN onChange is called in Year select SHOULD set callback', () => {
            renderComponent();

            const event = {
                currentTarget: {
                    value: '2021',
                },
            } as React.ChangeEvent<HTMLInputElement>;

            const { onChange = jest.fn() } = component.find('select').at(1).props();
            onChange(event);

            expect(mockOnChange).toHaveBeenCalledWith('20210101');
        });
    });
});
