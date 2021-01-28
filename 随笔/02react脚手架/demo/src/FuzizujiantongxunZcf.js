/* 
    6 父子组件的通讯-子传父
    子传父：
    在vue中是通过自定义事件来完成的；
    在React中同样是通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可；
*/
import React, {Component} from "react";


// 子组件
function CounterButton(props){
    const {operator, btnClick} = props;
    return  <button onClick={btnClick}>{operator}</button>
}

// 父组件
export default class App3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    render(){
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <CounterButton operator="+1" btnClick={e => {this.changeCounter(1)}} />
                <CounterButton operator="-1" btnClick={e => {this.changeCounter(-1)}} />
            </div>
        )
    }
    changeCounter(count){
        this.setState({
            counter: this.state.counter + count
        })
    }
}