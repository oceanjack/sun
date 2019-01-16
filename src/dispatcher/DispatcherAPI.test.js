import { DispatcherAPI } from './DispatcherAPI';

it('注册事件', () => {
    let cnt = 0;
    expect(DispatcherAPI.regEvent('test', () => ++cnt)).toBe(true);
    expect(DispatcherAPI.regEvent('test', () => --cnt)).toBe(false);
});

it('移除事件', () => {
    let cnt = 0;
    expect(DispatcherAPI.regEvent('test2', () => ++cnt)).toBe(true);
    DispatcherAPI.removeEvent('test2');
    expect(DispatcherAPI.regEvent('test2', () => --cnt)).toBe(true);
});

it('广播事件', () => {
    let cnt = 0;
    expect(DispatcherAPI.regEvent('test3', () => ++cnt)).toBe(true);
    DispatcherAPI.broadcastMsg('test3');
    expect(cnt).toEqual(1);
    DispatcherAPI.broadcastMsg('test3');
    expect(cnt).toEqual(2);
});

it('无广播', () => {
    expect(DispatcherAPI.broadcastMsg('test5', true)).toBe(false);
});