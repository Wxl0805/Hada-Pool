import service from "../utils/request";

// explorer概览顶部数据
export const getRecentBlocksOverview = (data) => {
    return service({
        url: "/base1/getRecentBlocksOverview",
        method: "post",
        data,
    });
};

// explorer Recent Blocks数据
export const getRecentBlocks = (data) => {
    return service({
        url: "/base1/getRecentBlocks",
        method: "post",
        data,
    });
};

// explorer排行榜数据
export const getRankList = (data) => {
    return service({
        url: "/base1/getRankList",
        method: "post",
        data,
    });
};