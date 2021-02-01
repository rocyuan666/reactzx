import React, { PureComponent } from 'react';
import axios from "axios";
import {
	connect
} from "react-redux";

import {
	addAction,
	changeBanner
} from "./store/action";

class App extends PureComponent {

	componentDidMount(){
		axios({
			url: "//roc.luojing.top:3001/banner"
		}).then(res => {
			this.props.handleChangeBanner(res.data.banners)
		})
	}

	render() {
		return (
			<div>
				<p>{this.props.counter}</p>
				<button onClick={e => this.props.handleAdd(1)}>+1</button>
				<hr/>
				<ul>
					{
						this.props.banner.map(item => {
							return (
								<li key={item.encodeId}>
									<img src={item.imageUrl} alt="" width="200" />
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		counter: state.counter,
		banner: state.banner
	}
}
const mapDispatchToprops = dispatch => {
	return {
		handleAdd(num) {
			dispatch(addAction(num))
		},
		handleChangeBanner(banner){
			dispatch(changeBanner(banner))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToprops)(App);