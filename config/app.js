var express = require('express');
var md5 = require('js-md5');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({
  limit: '1mb'
}));
app.use(bodyParser.urlencoded({
  limit: '1mb',
  extended: true
}));
var DatabaseOperation = require('./connection');
 
//引用bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
 
//用户注册
app.get('/api/user/register', function (req, res) {
  DatabaseOperation.select('user', {
    "username": req.query.username,
  }, function (result) {
    if (result.length > 0) {
      result = {
        code: '1001'
      }
      res.json(result);
    } else {
      DatabaseOperation.insert('user', [{
        "username": req.query.username,
        "password": md5(req.query.password)
      }], function (result) {
        res.json(result)
      });
    }
  });
});
 
const port = 9075;
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});