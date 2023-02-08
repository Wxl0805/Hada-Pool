import service from "../utils/request";

// address数据
export const getAddressList = (data) => {
    return service({
        url: "/base1/getRankList/acceptSolutionList",
        method: "post",
        data,
    });
};