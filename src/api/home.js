import service from "../utils/request";

// 联系我们
export const contactUs = (data) => {
  return service({
    url: "/base1/contact",
    method: "post",
    data,
  });
};
