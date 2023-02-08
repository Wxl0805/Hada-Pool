//动态引入JS文件
function loadJavaScript(src, callback) {
  let script_list = [];
  document.querySelectorAll("script[src]").forEach((ret) => {
    script_list.push(ret.src);
  });
  if (script_list.indexOf(src) === -1) {
    var script = document.createElement("script"),
      head = document.getElementsByTagName("head")[0],
      body = document.getElementsByTagName("body")[0];
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = src;
    if (script.addEventListener) {
      script.addEventListener(
        "load",
        function () {
          setTimeout(function () {
            callback();
          }, 500);
        },
        false
      );
    } else if (script.attachEvent) {
      script.attachEvent("onreadystatechange", function () {
        var target = window.event.srcElement;
        if (target.readyState == "loaded") {
          setTimeout(function () {
            callback();
          }, 500);
        }
      });
    }
    head.appendChild(script);
    // body.appendChild(script);
  } else {
    callback();
  }
}

//引入远程js，加载完成后执行相应方法
function loadJs(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}

export { loadJavaScript, loadJs };
