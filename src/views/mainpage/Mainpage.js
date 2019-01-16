import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { DispatcherAPI } from '@dispatcher/DispatcherAPI';
import { events } from '@constants/events';
import MainPageData from './MainPageData';
import DocumentTitle from 'react-document-title';
@observer
class Mainpage extends Component {
  @observable data = new MainPageData();

  componentDidMount = () => {
    this.data.getData();
    DispatcherAPI.regEvent(events.changeTestPageNum, this.data.updateCnt); //这里注册全局事件，当广播发出时，将执行updateCnt
  }

  componentWillUnmount = () => {
    DispatcherAPI.removeEvent(events.changeTestPageNum); //这里移除了事件
  }

  render() {
    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="点击下面数字"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>你好{this.data.store.test}</span>}
            />
            <Card.Body>
              <Link to="testpage">尝试了{this.data.store.cnt}次</Link>
            </Card.Body>
            <Card.Footer content={this.data.store.list} extra={<Link to="test">加油哦</Link>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <DocumentTitle title="开始吧"></DocumentTitle>
      </div>
    );
  }
}

export default Mainpage;
