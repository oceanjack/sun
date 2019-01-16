import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { appInfo } from './constants/appInfo';
import './index.css';
import Root from './routers/root';
import * as serviceWorker from './serviceWorker';

const supportsHistory = 'pushState' in window.history

let dir = appInfo.dir;
if(process && process.env && process.env.REACT_APP_DIR === '1') {
  dir = "/";
}

ReactDOM.render(
  <BrowserRouter 
    basename={dir}
    forceRefresh={!supportsHistory}>
    <Root />
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
