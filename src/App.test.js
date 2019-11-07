import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render App without throwing an error', () => {
  expect(shallow(<App />).find('form.leapYear').exists()).toBe(true)
});

it('renders a input field', () => {
  expect(shallow(<App />).find('#year').length).toEqual(1)
 });
 it('renders input button field', () => {
  expect(shallow(<App />).find('.btn-submit').length).toEqual(1)
 });
 