import service from "../utils/request";

// 获取算力
export const getSpeed = (data) => {
    return service({
        url: "/base1/getSpeed?address=" + data.address,
        method: "post",
    });
};