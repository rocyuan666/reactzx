import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// 中间件
const allMiddleware = applyMiddleware(thunkMiddleware)

// react-devtools工具配置
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// 中间件、react-devtools 使用
const store = createStore(reducer, composeEnhancers(allMiddleware));
export default store;