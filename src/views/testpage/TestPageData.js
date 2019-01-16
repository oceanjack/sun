import { observable, computed, action } from 'mobx';
import { StoreAPI } from '@store/StoreAPI';
import { caches } from '@constants/caches';

const createNum = () => {
    return Math.floor(Math.random() * 100) + 1;
}

class TestPageData {
    @observable store = StoreAPI.createStore(
        'TestPageData', {
            logohover: false,
            inputValue: 0,
            value: 0,
            realNum: createNum()
        });

    @action updateInputValue = (value) => {
        this.store.inputValue = value;
    }

    @action updateNum = (value) => {
        this.store.value = value;
        StoreAPI.cache(caches.TestPageNum, value);
    }

    @action randomNum = () => {
        this.store.realNum = createNum();
    }

    @action updateLogohover = () => {
        this.store.logohover = !this.store.logohover;
    }

    @computed get ans() {
        if(this.store.value > this.store.realNum) {
            return 'big'; 
        } else if(this.store.value < this.store.realNum) {
            return 'small';
        } else {
            return 'right';
        }
    }

    //disposer = autorun(() => StoreAPI.saveStore('TestPageData', this.store));
}

export default TestPageData;
