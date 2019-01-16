import axios from 'axios';
import { appInfo } from '@constants/appInfo';

let apiUrl = appInfo.apiurl;
if(process && process.env && process.env.REACT_APP_MOCK === '1') {
    //临时 api 地址
    apiUrl = 'https://easy-mock.com/mock/{id}';
}

let API = {};
API.gm = (url) => {
    return axios.get(url);
}
API.pm = (url, obj) => {
    return axios.post(url, obj);
}

API.testMock = () => {
    return API.gm(apiUrl + '/mock');
}
API.testLIst = () => {
    return API.gm(apiUrl + '/restful/1/list');
}
API.getAuth = () => {
    //临时伪造数据
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve({auth: ['ok'], isLogin: sessionStorage._isLogin || false}), 500);
    });
}

export { API }; 