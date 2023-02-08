const baseSize = 16; // 这个是设计稿中1rem的大小。
export const setRem = () => {
  //   if (_isMobile()) {
  //     // 实际设备页面宽度和设计稿的比值
  //     const scale = document.documentElement.clientWidth / 375; // 此数值是设计稿的宽度大小
  //     // 计算实际的rem值并赋予给html的font-size
  //     document.documentElement.style.fontSize = baseSize * scale + "px";
  //     return;
  //   }
  // 实际设备页面宽度和设计稿的比值
  const scale = document.documentElement.clientWidth / 1920; // 此数值是设计稿的宽度大小
  // 计算实际的rem值并赋予给html的font-size
  document.documentElement.style.fontSize = baseSize * scale + "px";
};
