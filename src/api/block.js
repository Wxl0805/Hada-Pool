import service from "../utils/request";

// block数据
export const getBlockList = (data) => {
    return service({
        url: "/base1/getBlockDetails",
        method: "post",
        data,
    });
};

// getPreBlockDetails
export const getPreBlockDetails = (data) => {
    return service({
        url: "/base1/getPreBlockDetails",
        method: "post",
        data,
    });
};