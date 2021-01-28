/* 
    6 父子组件的通讯-认识组件的嵌套

    父传子：
    父组件通过 属性=值 的形式来传递给子组件数据；
    子组件通过 props 参数获取父组件传递过来的数据；
*/
import React, {Component} from "react";

function Header(){
    return <h2>Header</h2>
}

function Banner(){
    return <h2>Banner</h2>
}
function List(){
    return (
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
            <li>商品6</li>
        </ul>
    )
}
function Footer(){
    return <h2>Footer</h2>
}
function Main(){
    return (
        <div>
            <Banner />
            <List />
        </div>
    )
}

export default class App1 extends Component{
    render(){
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}