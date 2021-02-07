import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Numbers, { INumbersProps } from './Numbers';

export default {
    title: 'Numbers',
    component: Numbers,
    argTypes: {},
} as Meta;

const Template: Story<INumbersProps> = (args) => <Numbers {...args} />;

export const Default = Template.bind({});
Default.args = {
    numbers: [5, 67, 8, 2, 88],
    euroNumbers: [99, 17],
    currentDate: 20210108,
};
