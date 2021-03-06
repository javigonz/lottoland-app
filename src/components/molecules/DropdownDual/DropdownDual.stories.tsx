import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DropdownDual from './DropdownDual';
import { IDropdownDualProps } from '../../../types/types';

export default {
    title: 'DropdownDual',
    component: DropdownDual,
    argTypes: {},
} as Meta;

const Template: Story<IDropdownDualProps> = (args) => <DropdownDual {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (value: string) => console.log('SELECT --> ', value),
};
