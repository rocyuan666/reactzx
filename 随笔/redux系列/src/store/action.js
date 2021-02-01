import axios from "axios";

import {
	CHANGE_COUNTER,
	CHANGE_BANNER
} from "./const";

export const addAction = (num) => {
	return {
		type: CHANGE_COUNTER,
		num
	}
}

export const changeBanner = banner => {
	return {
		type: CHANGE_BANNER,
		banner
	}
}

// 定义 redux-thunk 函数
export const getBannerDataAction = (dispacth, getState) => {
	axios({
		url: "//roc.luojing.top:3001/banner"
	}).then(res => {
		dispacth(changeBanner(res.data.banners))
	})
}