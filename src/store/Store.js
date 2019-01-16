import { appInfo } from '@constants/appInfo';

class Store {
    localItems = {};
    items = {};

    constructor() {
        this.loadFromLocal();
    }

    loadFromLocal = () => {
        if(
            sessionStorage && 
            sessionStorage.getItem('__' + appInfo.appName)) {
            this.localItems = JSON.parse(sessionStorage.getItem('__' + appInfo.appName));
        }
    }

    saveToLocal = () => {
        if(sessionStorage) {
            sessionStorage.setItem('__' + appInfo.appName, JSON.stringify(this.localItems));
        }
    }

    addLocalItem = (key, init) => {
        this.loadFromLocal();
        if(typeof(this.localItems[key]) == 'undefined') {
            this.localItems[key] = init;
        }
        this.saveToLocal();
        return this.localItems[key];
    }

    getLocalItem = (key) => {
        this.loadFromLocal();
        return this.localItems[key];
    }

    updateLocalItem = (key, value) => {
        this.loadFromLocal();
        this.localItems[key] = value;
        this.saveToLocal();
        return true;
    }

    removeLocalItem = (key) => {
        this.loadFromLocal();
        delete this.localItems[key];
        this.saveToLocal();
        return true;
    }

    addItem = (key, init) => {
        if(typeof(this.items[key]) == 'undefined') {
            this.items[key] = init;
        }
        return JSON.parse(JSON.stringify(this.items[key]));
    }

    getItem = (key) => {
        if(typeof(this.items[key]) == 'undefined') {
            return this.items[key];
        }
        return JSON.parse(JSON.stringify(this.items[key]));
    }

    updateItem = (key, value) => {
        this.items[key] = value;
        return true;
    }

    removeItem = (key) => {
        delete this.items[key];
        return true;
    }
}

export default Store;
