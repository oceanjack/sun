- 框架介绍

01. 项目是 create-react-app 创建，然后将配置释放了出来，进行配置
02. 项目使用 webpack 打包，@babel/polyfill 用于处理兼容(es6->es5)
03. 项目主要使用了 mobx, react-router4, less, css-module, antd-moble, classnames, lodash, jest, easy-mock, axios
04. 项目自行实现了 store ( 将数据做统一管理 ), dispatcher (派发器可做消息广播)
05. 项目对 router 进行了封装，引入权限和懒加载，权限依赖 API.getAuth 去获取权限
06. 项目src目录结构：api (接口)，components (视图组件), hocs (逻辑组件), constants (常量), routers (路由), styles (antd主题样式等), views (页面), store, dispatcher
07. 项目最初目的用于手机移动端
08. 项目执行脚本见 package.json 的 scripts

- 如何使用

01. 一个页面(view)需要有 xx.js 作为视图文件, xxData.js 作为数据控制文件, xx.test.js 作为测试文件, xx.module.less 作为样式文件
02. 公用的视图组件需要统一放到 src/components
03. 公用的逻辑组件需要统一放到 src/hocs
04. demo可参考 mainpage, testpage, testresult

05. store的使用1：xxData.js 中创建数据存储用到 StoreAPI.createStore/createLocalStore('name', initData) (加 Local 表示会自动往 sessionStore 存一份，用于页面会被刷新的场景下去保存数据)，注意这里创建 store 时，存储名 (name) 必须是该页面的名称！比如一个叫 xxpage 的页面，则存储名 (name) 需要叫 xxpage
06. store的使用2：如果需要保存当前的 store，需要 disposer = autorun(() => StoreAPI.saveStore/saveLocalStore('xx', this.store)) 及在 autorun 去保存数据变化
07. store的使用3: 使用 StoreAPI.cache 直接存储数据到全局，StoreAPI.getCache 去取这个数据

08. dispatcher的使用1: 在 componentDidMount 使用 DispatcherAPI.regEvent(events.xxx, func) 去注册事件
09. dispatcher的使用2: 在 componentWillUnmount 使用 DispatcherAPI.removeEvent(events.xxx) 去注销事件
10. dispatcher的使用3: 在其他地方使用 DispatcherAPI.broadcastMsg(events.xxx, data or null) 去广播事件，如果事件被注册了且未被注销，则会收到事件，并回调 func

11. router的使用1: RouterLoader('权限列表', import('资源路径'))
12. router的使用2: 会需要用户登录才使用。记录当前url并跳转到登录链接(appInfo.defaultUrl) -> 标记已登录回来等待 api 给出权限 -> 根据权限渲染
