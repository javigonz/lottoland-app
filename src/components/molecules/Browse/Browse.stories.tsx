import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Browse from './Browse';
import { IBrowseProps } from '../../../types/types';

export default {
    title: 'Browse',
    component: Browse,
    argTypes: {},
} as Meta;

const Template: Story<IBrowseProps> = (args) => <Browse {...args} />;

export const Default = Template.bind({});
Default.args = {
    dataHeader: [{ label: 'Tier' }, { label: 'Match' }, { label: 'Winners' }, { label: 'Amount' }],
    dataResult: [
        { tier: 'I', match: ' 5 Numbers + 2 Euronumbers', winners: '1x', amount: '€11,023,761.80' },
        { tier: 'II', match: ' 5 Numbers + 1 Euronumbers', winners: '6x', amount: '€322,395.30' },
    ],
};

export const WithoutResult = Template.bind({});
WithoutResult.args = {
    dataHeader: [{ label: 'Tier' }, { label: 'Match' }, { label: 'Winners' }, { label: 'Amount' }],
    dataResult: [],
};
