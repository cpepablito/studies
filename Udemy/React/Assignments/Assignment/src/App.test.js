import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Validator from './Validator/Validator';


describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App/>);
    });

    it('Contains list component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('Contains validator component', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Validator)).toHaveLength(1);
    });
});