import { StoreAPI } from './StoreAPI';

it('单值-存储测试', () => {
    StoreAPI.cache('test', 5);
    expect(StoreAPI.getCache('test')).toEqual(5);
});

it('store存储测试', () => {
    let store = StoreAPI.createStore("Test", {
        val: 666
    });
    store.val = 888;
    expect(store.val).toEqual(888);
    expect(StoreAPI.getStore('Test').val).toEqual(666);

    StoreAPI.saveStore('Test', store);
    expect(StoreAPI.getStore('Test').val).toEqual(888);

    StoreAPI.removeStore('Test');
    expect(StoreAPI.getStore('Test')).toBeUndefined();
});

it('store存储测试Local', () => {
    let store = StoreAPI.createLocalStore("Test2", {
        val: 666
    });
    store.val = 888;
    expect(store.val).toEqual(888);

    expect(StoreAPI.getLocalStore('Test2').val).toEqual(666);
    
    StoreAPI.saveLocalStore('Test2', store);
    expect(StoreAPI.getLocalStore('Test2').val).toEqual(888);

    StoreAPI.removeLocalStore('Test');
    expect(StoreAPI.getLocalStore('Test')).toBeUndefined();
});