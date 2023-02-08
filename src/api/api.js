// 所有的请求的接口的方法

import request from "../utils/request";

// 请求方法
const api = {
    // 获取所有数据
    get1toData(query) {
        return request({
            method: "get",
            url: "/base1/getPoolMiners/" + query,
        });
    },

    // 获取全部设备，包括在线设备和离线设备
    getProduct(query) {
        return request({
            method: "get",
            url: "/sendsms?address=" + query,
        });
    },

    // 获取概览echart数据
    getDataOverviewEchart(query) {
        return request({
            method: "post",
            url: "/base1/getRewards?address=" + query,
        });
    },

    // total reward
    getRewards(query) {
        return request({
            method: "post",
            url: "/base1/overview/getRewards?address=" + query,
        });
    },

};

export default api;