import { observable, action, autorun } from 'mobx';
import { StoreAPI } from '@store/StoreAPI';
import { caches } from '@constants/caches';
import { API } from '@api/API';

class RootData {
    @observable store = StoreAPI.createLocalStore(
        'rootData', {
            login: false,
            auth: []
        });

    @action updateLogin = (val) => {
        this.store.login = val;
    }

    @action updateAuth = (val) => {
        this.store.auth = val;
        StoreAPI.cache(caches._Auth, val);
    }

    getData = async(data) => {
        if(this.store.login) {
          return;
        }
        
        let mock = await API.getAuth();
        if(mock.isLogin) {
          this.updateAuth(mock.auth);
          this.updateLogin(true);
        } else {
          //为登录跳转处理
        }
    }

    disposer = autorun(() => StoreAPI.saveLocalStore('rootData', this.store));
}

export default RootData;
