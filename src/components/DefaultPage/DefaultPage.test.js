import React from 'react';
import ReactDOM from 'react-dom';
import DefaultPage from './DefaultPage';

it('渲染测试', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});