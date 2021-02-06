import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Dropdown, { IDropdownProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();
const defaultProps: IDropdownProps = {
    options: [],
    selected: '',
    onChange: (value: string) => mockOnChange(value),
};

describe('DropdownSimple Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IDropdownProps = defaultProps) => {
        component = mount(<Dropdown {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Render', () => {
        it('WHEN component is rendering SHOULD have instance', () => {
            renderComponent();
            expect(component).toBeDefined();
        });

        it('WHEN options SHOULD render all options', () => {
            const optionsProps = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                ],
            };

            renderComponent(optionsProps);

            expect(component.find('option').at(0).props().value).toBe('foo');
            expect(component.find('option').at(1).props().value).toBe('bar');
            expect(component.find('option')).toHaveLength(2);
            expect(component.find('select').at(0).props().defaultValue).toBe('');
        });

        it('WHEN options and selected SHOULD render all options and default value', () => {
            const optionsProps = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                    { label: 'Zed', value: 'zed' },
                ],
                selected: 'bar',
            };

            renderComponent(optionsProps);

            expect(component.find('option')).toHaveLength(3);
            expect(component.find('select').at(0).props().defaultValue).toBe('bar');
        });

        it('WHEN onChange is called SHOULD set callback', () => {
            const optionsProps = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                ],
            };

            renderComponent(optionsProps);

            const event = {
                currentTarget: {
                    value: 'foo-bar',
                },
            } as React.ChangeEvent<HTMLInputElement>;
            const { onChange = jest.fn() } = component.find('select').at(0).props();
            onChange(event);

            expect(mockOnChange).toHaveBeenCalledWith('foo-bar');
        });
    });
});
