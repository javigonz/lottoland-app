import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { IDropdownProps } from './Dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {},
} as Meta;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [],
    selected: '',
    onChange: (value: string) => console.log('SELECT --> ', value),
};

export const WithValuesAndSelected = Template.bind({});
WithValuesAndSelected.args = {
    options: [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
    ],
    selected: 'bar',
    onChange: (value: string) => console.log('SELECT --> ', value),
};

export const WithValuesAndUnselected = Template.bind({});
WithValuesAndUnselected.args = {
    options: [
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
    ],
    selected: '',
    onChange: (value: string) => console.log('SELECT --> ', value),
};
