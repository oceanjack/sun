import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TestPage from './TestPage';
import TestPageData from './TestPageData';
import ReactTestUtils from 'react-dom/test-utils';

it('渲染测试', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><TestPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('随机数生成测试', () => {
  let data = new TestPageData();
  data.randomNum();
  expect(data.store.realNum).toBeLessThanOrEqual(100);
  expect(data.store.realNum).toBeGreaterThanOrEqual(1);
});

it('更新测试', () => {
  let data = new TestPageData();
  data.updateInputValue(1);
  data.updateNum(2);
  expect(data.store.inputValue).toBeLessThanOrEqual(2);
  expect(data.store.value).toBeGreaterThanOrEqual(2);
});

it('ans测试', () => {
  let data = new TestPageData();
  data.updateNum(0);
  expect(data.ans).toEqual('small');
  data.updateNum(101);
  expect(data.ans).toEqual('big');
  data.updateNum(data.store.realNum);
  expect(data.ans).toEqual('right');
});

it('提交正确答案', () => {
  const testPage = ReactTestUtils.renderIntoDocument(<BrowserRouter><TestPage /></BrowserRouter>);

  const contains = ReactTestUtils.findRenderedComponentWithType(testPage, TestPage);
  const input = ReactTestUtils.findRenderedDOMComponentWithTag(testPage, 'input');
  const button = ReactTestUtils.findRenderedDOMComponentWithClass(testPage, 'button');

  input.value = contains.data.store.realNum;
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.click(button);

  expect(contains.data.store.value).toBe(contains.data.store.realNum + "");
});