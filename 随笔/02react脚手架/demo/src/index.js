import React from "react";
import ReactDOM from "react-dom";

// 组件化 - 创建组件
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
// 生命周期
import Shengmingzhouqi from "./Shengmingzhouqi";

// 父子组件通讯
import App1 from "./Fuzizujiantongxun"
import App2 from "./FuzizujiantongxunFcz"
import App3 from "./FuzizujiantongxunZcf"

// 非父子组件通讯

ReactDOM.render(
    <div>
        <ClassComponent />
        <FunctionComponent />
        <Shengmingzhouqi />
        <hr />
        <h2>父子组件通讯</h2>
        <App1 />
        <App2 />
        <App3 />
        <hr />
    </div>,
    document.getElementById("root")
)