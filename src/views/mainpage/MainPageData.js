import { observable, action, autorun } from 'mobx';
import { StoreAPI } from '@store/StoreAPI';
import { API } from '@api/API';

class MainPageData {
    @observable store = StoreAPI.createStore(
        'MainPageData', {
            cnt: 0,
            test: '你好',
            list: ''
        });

    /*
      TODO: 当某个事件被设置为广播回调时，再次做修改的规范问题
    */
    @action updateCnt = (data) => {
        this.store.cnt += data;
    }

    @action updateList = (val) => {
        this.store.list = val;
    }

    @action updateTest = (val) => {
        this.store.test = val;
    }

    getData = async() => {
        let mock = await API.testMock();
        let list = await API.testLIst();
        this.updateTest(list.data.data[0].user.name);
        this.updateList(mock.data.data.projects[0].email);
    }

    disposer = autorun(() => StoreAPI.saveStore('MainPageData', this.store));
}

export default MainPageData;
