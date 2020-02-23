var fs = require("fs");
var port = process.argv[2];
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

const session = JSON.parse(fs.readFileSync("./session.json").toString());

// 注册
app.post("/register", (req, res) => {
  // 读数据库
  let dbUser_Sting = fs.readFileSync("./db/user.json").toString();
  let dbUser_Array = JSON.parse(dbUser_Sting);

  console.log(req.body);
  let newUser = {
    user_id: dbUser_Array.length,
    name: req.body.name,
    password: req.body.password
  };

  // 写数据库
  dbUser_Array.push(newUser);
  const string = JSON.stringify(dbUser_Array);
  fs.writeFileSync("./db/user.json", string);

  res.end();
});

// 登录
app.post("/login", (req, res) => {
  console.log(req.body);
  let newUser = {
    name: req.body.name,
    password: req.body.password
  };

  // 读数据库
  let dbUser_Sting = fs.readFileSync("./db/user.json").toString();
  let dbUser_Array = JSON.parse(dbUser_Sting);

  // 判断是否有此账户且密码正确
  const user = dbUser_Array.find(user => {
    return user.name === newUser.name && user.password === newUser.password;
  });
  console.log(user);
  if (user == undefined) {
    // 验证失败
    res.statusCode = 401;
    res.end();
  } else {
    // 验证成功
    res.statusCode = 200;
    // 生成session,返回session
    const random = Math.random();
    session[random] = { user_id: user.user_id };
    fs.writeFileSync("./session.json", JSON.stringify(session));
    res.end(`${random}`);
  }
});

app.get("/home", (req, res) => {
  const cookie = req.query;
  const session_Id = cookie.session_id;

  // 读数据库
  let dbUser_Sting = fs.readFileSync("./db/user.json").toString();
  let dbUser_Array = JSON.parse(dbUser_Sting);
  const homeHtml = fs.readFileSync("./public/home.html").toString();
  let string = "";

  // 验证session是否存在
  if (session_Id !== undefined && session[session_Id]) {
    let userId = session[session_Id].user_id;
    const if_user = dbUser_Array.find(user => user.user_id === userId);

    // 如果查找到了该用户（有session且查得到该用户）
    if (if_user) {
      string = homeHtml
        .replace("{{loginStatus}}", "已登录")
        .replace("{{user.name}}", if_user.name);
      res.write(`{"loginStatus":"已登录","username":"${if_user.name}"}`);
    }
  } else {
    //session为空
    string = homeHtml
      .replace("{{loginStatus}}", "未登录")
      .replace("{{user.name}}", "");
    res.write(`string`);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
