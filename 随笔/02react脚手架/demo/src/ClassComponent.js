// 5-1 class创建App组件（官方推荐）

import React, { Component } from "react";

export default class ClassComponent extends Component {
    constructor(){
        super();
        // 存放组件数据
        this.state = {

        }
    };
    // 组件渲染的视图
    render(){
        return (
            <h2>Hello ClassComponent</h2>
        )
    }
}