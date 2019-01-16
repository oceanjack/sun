
class Dispatcher {
    items = {};

    addEvent = (key, callback) => {
        if(typeof(this.items[key]) == "undefined") {
            this.items[key] = callback;
            return true;
        } else {
            console.error('事件已注册');
            return false;
        }
    }

    runEvent = (key, data) => {
        if(typeof(this.items[key]) == "undefined") {
            return false;
        }
        this.items[key](data);
        return true;
    }

    removeEvent = (key) => {
        delete this.items[key];
        return true;
    }
}

export default Dispatcher;
