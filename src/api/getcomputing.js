import service from "../utils/request";

// čˇåįŽå
export const getSpeed = (data) => {
    return service({
        url: "/base1/getSpeed?address=" + data.address,
        method: "post",
    });
};