/* 
    6 父子组件的通讯-父传子
    父传子：
    父组件通过 属性=值 的形式来传递给子组件数据；
    子组件通过 props 参数获取父组件传递过来的数据；
*/
import React, {Component} from "react";

// 1 class 类子组件
class ChildCpn1 extends Component{
    constructor(props){
        super(props)
        //不必每次都写 this.props = props  可调用 super(props)
        // this.props = props;
    }
    render(){
        const { name, sex } = this.props;
        
        return (
            <div>
                <h2>我是class子组件</h2>
                <p>展示父组件传过来的值：{name + " " + sex}</p>
            </div>
        )
    }
}

// 2 function 方法子组件
function ChildCpn2(props){
    const { name, sex } = props;
    return(
        <div>
            <h2>我是function子组件</h2>
            <p>展示父组件传过来的值：{name + " " + sex}</p>
        </div>
    )
}

// 父组件
export default class App2 extends Component{
    render(){
        return (
            <div>
                <ChildCpn1 name="Roc" sex="男" />
                <ChildCpn2 name="Roc" sex="男" />
            </div>
        )
    }
}