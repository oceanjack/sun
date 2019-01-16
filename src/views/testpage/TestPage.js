import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, InputItem } from 'antd-mobile';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { DispatcherAPI } from '@dispatcher/DispatcherAPI';
import { events } from '@constants/events';
import DocumentTitle from 'react-document-title';
import Mainpage from '../mainpage/Mainpage';
import TestPageData from './TestPageData';
import logo from './logo.svg';
import styles from  './TestPage.module.less';

const classNames = require('classnames');

@observer
class TestPage extends Component {
  @observable data = new TestPageData();

  submitNumber = () => {
    this.data.updateNum(this.data.store.inputValue);
    DispatcherAPI.broadcastMsg(events.changeTestPageNum, 10); //广播事件
  }

  logohover = () => {
    this.data.updateLogohover();
  }

  render() {
    if(this.data.ans === 'right') {
      return <Redirect push={true} to="./testresult" />
    }

    var logoClass = classNames({
      [styles.logo]: true,
      [styles.logohover]: this.data.store.logohover
    });

    return (
      <div>
        <Mainpage />
        <div className={styles.TestPage}>
          <header className={styles.header}>
            <img src={logo} className={logoClass} alt="logo" />
            <p>
              Guess the Number
            </p>
            <p>
              {this.data.store.value}
            </p>
            <p>
              {this.data.ans}
            </p>
          </header>
          <Button 
            className="button" 
            type="primary" 
            onClick={this.submitNumber}
            onMouseEnter={this.logohover}
            onMouseLeave={this.logohover}>
            Try this number
          </Button>
          <InputItem
            className="input" 
            type="number"
            defaultValue={0}
            onChange={(value) => this.data.updateInputValue(value)} />
        </div>
        <DocumentTitle title="主页"></DocumentTitle>
      </div>
    );
  }
}

export default TestPage;