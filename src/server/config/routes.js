var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var secret = require('../config/secret.js')

//导出 route

var Menu = require('../app/controllers/MenuController.js');
var User = require('../app/controllers/UserController.js');
var Upload = require('../app/controllers/UploadController.js');


	// this.success = success;
	// this.res = res;
	// this.time = moment().format('YYYY-MM-DD HH:mm:ss');


//菜单
// router.get('/menu', jwt({secret: secret.secretToken}), Menu.All);  带权限
router.get('/menu',Menu.All);
router.post('/menu', Menu.Post);



//用户
router.post('/user', User.Post); //注册
router.post('/login', User.Login); //登录
router.get('/userexists',User.UserExists); //查看用户是否存在



//上传
router.get('/upload', Upload.Get);
router.get('/down', Upload.Down);
router.get('/info', Upload.FileInfo);

//路由错误中间件
router.use(function(err, req, res, next) {
	if(err){
    	res.status(500).json({success:false,res:err});
	}
	next();
})

module.exports = router;
