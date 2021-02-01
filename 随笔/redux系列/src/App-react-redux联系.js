import React, { PureComponent } from 'react'
import {connect} from "react-redux";

import {addAction} from "./store/action";

class App extends PureComponent {
	
	render() {
		return (
			<div>
				<p>{this.props.counter}</p>
				<button onClick={e => this.props.handleAdd(1)}>+1</button>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		counter: state.counter
	}
}
const mapDispatchToProps = dispatch => {
	return {
		handleAdd(num){
			dispatch(addAction(num))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)