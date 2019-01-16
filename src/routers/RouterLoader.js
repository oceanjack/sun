import React from "react";
import Loadable from 'react-loadable';
import { StoreAPI } from '@store/StoreAPI';
import { caches } from '@constants/caches';
import DefaultPage from '@components/DefaultPage/DefaultPage';

const indexOf = require('lodash/indexOf');

const RouterLoader = (reqAuth, res) => {
  //验证权限
  const userAuth = StoreAPI.getCache(caches._Auth);
  let found = false;
  for(let i = 0, len = userAuth.length; i < len; ++i) {
    if(indexOf(reqAuth, userAuth[i]) >= 0) {
      found = true;
      break;
    }
  }
  if(userAuth.length <= 0) {
    found = true;
  }

  if(found) {
    return Loadable({
      loader: res,
      loading: () => {
        return <DefaultPage text="加载中..." />;
      }
    })
  }

  return () => {
    return <DefaultPage text="木有权限查看" />;
  }
}

export { RouterLoader };