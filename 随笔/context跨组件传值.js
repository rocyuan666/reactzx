/**
 * 跨组件传值（context）：
 * 1. 创建 context 组件
 */
const MyContext = React.createContext(10);

/**
 * 3. 类组件的接收法
 * About.contextType = MyContext;
 */
class About extends React.PureComponent {
	render() {
		console.log(this.context)
		return (
			<div>
				<h2>About</h2>
				<h3>我是App的孙组件，这是App传过来的值:{this.context}</h3>
			</div>
		)
	}
}
About.contextType = MyContext;

/**
 * 3. 函数组件的接收法
 * MyContext.Consumer
 */
// function About() {
// 	return (
// 		<div>
// 			<h2>About</h2>
// 			<MyContext.Consumer>
// 				{value => {
// 					return <h3>我是App的孙组件，这是App传过来的值:{value}</h3>
// 				}}
// 			</MyContext.Consumer>
// 		</div>
// 	)
// }

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<About />
		</div>
	)
}

class App extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			num: 12
		}
	}
	render() {
		return (
			<div>
				<h2>App</h2>
				{/* 
					2. 发送数据
					MyContext.Provider value={this.state.num}
					注意：Provider 的 value值没传就会使用 createContext(默认值)的默认值
				 */}
				<MyContext.Provider value={this.state.num}>
					<Home />
				</MyContext.Provider>
			</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById("root")
)