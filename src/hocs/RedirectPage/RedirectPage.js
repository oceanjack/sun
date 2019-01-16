import { StoreAPI } from '../../store/StoreAPI';
import { caches } from '../../constants/caches';
import { appInfo } from '../../constants/appInfo';

const RedirectPage = () => {
  const search = new URLSearchParams(window.location.search);
  let url = search.get('url');
  let identity = search.get('identity');

  if (StoreAPI.getCache(caches._RedirectUrl)) {
    url = StoreAPI.getCache(caches._RedirectUrl);
    StoreAPI.clearCache(caches._RedirectUrl);

    StoreAPI.cache(caches._RedirectCnt, 1);

    //临时变量，测试用
    sessionStorage._isLogin = true;

    window.location.assign(url);

  } else {
    StoreAPI.cache(caches._RedirectUrl, url);

    switch (identity) {
      case 'stu':
        window.location.assign(appInfo.defaultUrl);
        break;
      case 'par':
        window.location.assign(appInfo.defaultUrl);
        break;
      default:
        window.location.assign(appInfo.defaultUrl);
        break;
    }
  }
}

export default RedirectPage;