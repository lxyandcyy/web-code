// 四步实现ajax

//第一步
const req = new XMLHttpRequest();

//第二步
req.open("GET", "/style.css");
//第三步
req.onreadystatechange = () => {
  if (req.readyState == 4) {
    // 加载成功
    if (req.status == 200) {
      console.log(req.response);
    } else {
      //加载失败
      console.log("加载css失败");
    }
  }
};
//第四步
req.send();
