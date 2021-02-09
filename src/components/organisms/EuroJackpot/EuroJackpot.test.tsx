import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import EuroJackpot from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('EuroJackpot Component', () => {
    let component: ReactWrapper;

    const renderComponent = () => {
        component = mount(<EuroJackpot />);
    };

    describe('Init', () => {
        it('WHEN component is rendering SHOULD defined component properly', () => {
            renderComponent();

            expect(component).toBeDefined();
        });

        fit('WHEN ', () => {
            renderComponent();

            
        });
    });
});
