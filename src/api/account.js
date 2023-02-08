import service from "../utils/request";

// 总览:solutions table
export const solutionsInfo = (data) => {
  return service({
    url: "/base1/getSolutions",
    method: "post",
    data,
  });
};
