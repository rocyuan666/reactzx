// 5-3 生命周期
import React, { Component } from "react";

export default class Shengmingzhouqi extends Component{
    // constructor: 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数constructor。
    constructor(){
        super();
        this.state = {};
        console.log("Shengmingzhouqi--constructor");
    };

    // ********************常用的生命周期********************

    // componentDidMount: 会在组件挂载后（插入 DOM 树中）立即调用。
    componentDidMount(){
        console.log("Shengmingzhouqi--componentDidMount");
    };
    // componentDidUpdate: 会在更新后会被立即调用，首次渲染不会执行此方法。
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Shengmingzhouqi--componentDidUpdate");
    }
    // componentWillUnmount: 会在组件卸载及销毁之前直接调用。
    componentWillUnmount(){
        console.log("Shengmingzhouqi--componentWillUnmount")
    }

    // ********************不常用的生命周期********************
    /* 
        getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state；
        getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）；
        shouldComponentUpdate：该生命周期函数很常用，但是我们等待讲性能优化时再来详细讲解；
    */
    








    render(){
        return (
            <h2>hello Shengmingzhouqi</h2>
        )
    }
}