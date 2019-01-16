import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import MainPageData from './MainPageData';

it('渲染测试', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MainPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('数据更新测试-直接更新', () => {
  let data = new MainPageData();
  data.updateCnt();
  expect(data.store.cnt).toBe(1);
  data.updateList('list');
  expect(data.store.list).toBe('list');
  data.updateTest('test');
  expect(data.store.test).toBe('test');
});