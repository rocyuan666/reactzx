import React, { PureComponent } from 'react';
import store from "./store";
import {
	addAction
} from "./store/action";

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			counter: store.getState().counter
		}
	}

	componentDidMount(){
		this.unConter = store.subscribe(() => {
			this.setState({
				counter: store.getState().counter
			})
		})
	}
	componentWillUnmount(){
		this.unConter()
	}

	render() {
		return (
			<div>
				App
				<p>{this.state.counter}</p>
				<button onClick={e => this.handleAdd()}>+1</button>
			</div>
		)
	}

	handleAdd(){
		store.dispatch(addAction(1))
	}
}
