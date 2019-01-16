import Dispatcher from './Dispatcher';

let dispatcher = new Dispatcher();
let DispatcherAPI = {};

DispatcherAPI.regEvent = (key, callback) => {
    return dispatcher.addEvent(key, callback);
}
DispatcherAPI.broadcastMsg = (key, data) => {
    return dispatcher.runEvent(key, data);
}
DispatcherAPI.removeEvent = (key) => {
    return dispatcher.removeEvent(key);
}

export { DispatcherAPI };
