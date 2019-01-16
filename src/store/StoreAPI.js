import Store from './Store';

let store = new Store();
let StoreAPI = {};

StoreAPI.createStore = (key, init) => {
    return store.addItem(key, init);
}
StoreAPI.saveStore = (key, obj) => {
    return store.updateItem(key, obj);
}
StoreAPI.getStore = (key) => {
    return store.getItem(key);
}
StoreAPI.removeStore = (key) => {
    return store.removeItem(key);
}

StoreAPI.createLocalStore = (key, init) => {
    return store.addLocalItem(key, init);
}
StoreAPI.saveLocalStore = (key, obj) => {
    return store.updateLocalItem(key, obj);
}
StoreAPI.getLocalStore = (key) => {
    return store.getLocalItem(key);
}
StoreAPI.removeLocalStore = (key) => {
    return store.removeLocalItem(key);
}

StoreAPI.cache = (key, obj) => {
    return store.updateLocalItem(key, obj);
}
StoreAPI.getCache = (key) => {
    return store.getLocalItem(key);
}
StoreAPI.clearCache = (key) => {
    return store.removeLocalItem(key);
}

export { StoreAPI }; 