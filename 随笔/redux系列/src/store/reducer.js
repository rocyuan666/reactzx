import {
	CHANGE_COUNTER,
	CHANGE_BANNER
} from "./const";

const initState = {
	counter: 0,
	banner: []
}

export default function reducer(state = initState, action) {
	switch(action.type) {
		case CHANGE_COUNTER:
			return {...state, counter: state.counter + action.num}
		case CHANGE_BANNER:
			return {...state, banner: action.banner}
		default:
			return {...state}
	}
}