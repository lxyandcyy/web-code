const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const local_data = JSON.parse(localStorage.getItem("local_data"));
const hashMap = local_data || [
  {
    logo: "a",
    url: "acfun.com"
  },
  {
    logo: "b",
    url: "bilibili.com"
  }
];

const simplifyUrl = url => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};

const render = () => {
  $siteList.find("li:not(.last)").remove();
  //   添加网址元素
  hashMap.forEach((item, index) => {
    const $li_item = $(`
        <li class="site">
        <div class="close">
            <svg class="icon">
                <use xlink:href="#icon-close"></use>
            </svg>
        </div>
        <div class="logo">${item.logo}
            <div class="link">${item.url}
            </div>
        </div>
        </li>`);
    $li_item.insertBefore($lastLi);
    //监听网页跳转事件
    $li_item.on("click", () => {
      window.open("https://" + item.url);
    });
    // 监听关闭事件
    $li_item.on("click", ".close", e => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
  });
};
render();

$(".addButton").on("click", () => {
  let url = window.prompt("请问您要添加的网址是什么？");
  if (url) {
    hashMap.push({ logo: simplifyUrl(url)[0], url: simplifyUrl(url) });
    //   刷新页面，重新渲染页面
    render();
  }
});

// 存入本地数据库
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("local_data", string);
};

$(document).on("keypress", e => {
  const { key } = e;
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open("https://" + hashMap[i].url);
    }
  }
});
