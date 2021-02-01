import React, { PureComponent } from 'react'
import { connect } from 'react-redux';

import {
	getBannerDataAction
} from "./store/action";

class App extends PureComponent {
	componentDidMount() {
		this.props.getBannerdata()
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.props.banner.map(item => {
							return (
								<li key={item.encodeId}>
									<img src={item.imageUrl} width="200" alt=""/>
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
		banner: state.banner
	}
}
const mapDispatchToprops = dispatch => {
	return {
		getBannerdata(){
			dispatch(getBannerDataAction)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToprops)(App);