import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './DefaultPage.module.less';
import fun from './fun.png';

class DefaultPage extends Component {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <img className={styles.img} src={fun} alt=""/>
        <WhiteSpace size="lg" />
        <div className={styles.word}>{this.props.text}</div>
      </WingBlank>
    );
  }
}

export default DefaultPage;
