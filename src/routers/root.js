import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { RouterLoader } from './RouterLoader';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { StoreAPI } from '@store/StoreAPI';
import { caches } from '@constants/caches';
import RootData from './rootData';
import DefaultPage from '@components/DefaultPage/DefaultPage';
import RedirectPage from '@hocs/RedirectPage/RedirectPage';
@observer
class Main extends Component {
  @observable data = new RootData();

  componentDidMount() {
    this.data.getData();
  }

  render() {
    if(!this.data.store.login) { //未登录显示
      if(!StoreAPI.getCache(caches._RedirectCnt)) { //未经过登录重定向
        return (
          <Switch>
            <Route path="/redirect" component={RedirectPage} />
            <Redirect push={false} to={"/redirect?url=" + encodeURIComponent(window.location.href) + "&identity="} />
          </Switch>
        );
      } else { //经过登录重定向
        return (<DefaultPage text="登录中" />);      
      }
    }

    //登录后显示
    return (
      <Switch>
        <Route path="/" exact component={RouterLoader(["ok"], () => import('../views/mainpage/Mainpage'))} />
        <Route path="/testpage" component={RouterLoader(["ok"], () => import('../views/testpage/TestPage'))} />
        <Route path="/testresult" component={RouterLoader(["ok"], () => import('../views/testresult/TestResult'))} />
        
        <Route path="/test" component={RouterLoader(["show"], () => import('../views/testpage/TestPage'))} />

        <Route component={() => {return <DefaultPage text="页面找不到啦" />}} />
      </Switch>
    );
  }
}

const Root = withRouter(Main);

export default Root;
