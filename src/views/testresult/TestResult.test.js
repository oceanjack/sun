import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TestResult from './TestResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><TestResult /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});