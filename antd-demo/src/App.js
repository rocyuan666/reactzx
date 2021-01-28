import React, { PureComponent } from "react";
import styled from "styled-components";
import classNames from "classnames";

// 应用 styled-components库 写样式
const RocDiv = styled.div`
  color: #000;
  h2{
    font-size: 16px;
    font-weight: normal;
  }
  .red{
    color: #f00;
  }
`


export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isActive: false
    }
  }
  render(){
    return (
      <RocDiv>
        <h2>App</h2>
        {/* 应用 classnames库 添加class名字 */}
        <p className={classNames({red: this.state.isActive})}>我是文字</p>
        <button onClick={e => this.handleChangeColor(e)}>变色</button>
      </RocDiv>
    )
  }
  handleChangeColor(e){
    this.setState({
      isActive: !this.state.isActive
    })
  }
}