/*
* VueRouter 源码解析
* */
export default class VueRouter {
    mode: string; // 传入的字符串参数，指示history类别
    history: HashHistory | HTMLHistory | AbstractHistory; // 三种模式
    fallback: boolean;  // 如果浏览器不支持，history 回滚为 hash 模式

    constructor(options:RouterOptions = {}) {
        let mode = options.mode || 'hash'; // 默认为 hash 模式
        this.fallback = mode === 'history' && !supportPushState; // 判断浏览器是否支持
        if (!this.fallback) {
            mode = 'hash';
        }
        if (!inBrowser) {
            mode = 'abstract';
        }
        this.mode = mode;

        // 根据mode模式确定history 实际的类
        switch (mode) {
            case 'history':
                this.history = new HTML5History(this, options.base);
                break;
            case 'hash':
                this.history = new HashHistory(this, options.base, this.fallback);
                break;
            case 'abstract':
                this.history = new AbstractHistory(this, options.base);
                break;
            default:
                if (process.env.NODE_ENV !== 'production') {
                    assert(false, 'invalid mode');
                }
        }
    }

    // 初始化
    init() {
        const history = this.history;
        // 根据 history 的类别执行相应的初始化操作
        if (history instanceof HTML5History) {
            history.transitionTo(history.getCurrentLocation())
        } else if (history instanceof HashHistory) {
            const setupHashListener = () => {
                history.setupListeners();
            };
            history.transitionTo(
              history.getCurrentLocation(),
              setupHashListener
            )
        }

        history.listen(route => {
            this.apps.forEach((app) => {
                app._route = route;
            })
        })
    }

    // VueRouter 类暴露的以下方法实际是调用具体 history 对象的方法
    push(location: RawLocation, onComplete?:Function, onAbort?:Fucntion) {
        this.history.push(location, onComplate, onAbort);
    }

    replace(location: RawLocation, onComplete?:Function, onAbort?:Fucntion) {
        this.history.replace(location, onComplate, onAbort);
    }
}
