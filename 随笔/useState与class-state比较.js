/**
 * 函数式组件 useState hook
 * 
 * useState：点击增加 num到3，再点击打印num的值，再在5s内将num加到5，结果打印 3
 * class-state：点击增加 num到3，再点击打印num的值，再在5s内将num加到5，结果打印 5
 * 
 * 总结：useState会形成闭包，而class-state中显示的总是this.state.num
 */


// const App = React.memo(
// 	function () {
// 		const [num, setNum] = React.useState(0);

// 		function handleShowNum() {
// 			setTimeout(_ => {
// 				console.log(num)
// 			}, 5000)
// 		}

// 		return (
// 			<div>
// 				<h2>{num}</h2>
// 				<button onClick={e => { setNum(num + 1) }}>增加</button>
// 				<button onClick={e => handleShowNum()}>现在num的值</button>
// 			</div>
// 		)
// 	}
// )

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		}
	}
	render() {
		const { num } = this.state;
		return (
			<div>
				<h2>{num}</h2>
				<button onClick={e => this.changeNum()}>增加</button>
				<button onClick={e => this.handleShowNum()}>现在num的值</button>
			</div>
		)
	}
	changeNum() {
		this.setState({
			num: this.state.num + 1
		})
	}
	handleShowNum() {
		setTimeout(_ => {
			console.log(this.state.num)
		}, 5000)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);