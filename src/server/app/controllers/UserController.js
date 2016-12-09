var User = require('../models/User.js');
var TokenManager = require('../utils/TokenManager.js');
var Result = require('../viewmodels/result.js');
var jwt = require('jsonwebtoken');
var secret = require('../../config/secret.js');
/**
 * 保存一个用户
 * @param {[object]} req [description]
 * @param {[object]} res [description]
 */
exports.Post = function(req, res) {

    var _user = new User({
        username: 'admin1',
        password: 'admin'
    });

    var result = null;

    User.findByName(_user.username, function(err, user) {
        if (err) {
            result = new Result('user register', err.message, err.code || '', 500);
            return res.json(result);
        }
        if (user) {
            result = new Result('user register', '用户名已经存在', 'username_exists', 500);
            return res.json(result);
        }

        //保存用户
        _user.save(_user, function(err, user) {
            var result = null;
            if (err) {
                result = new Result('user register', err.message, err.code || '', 500);
                return res.json(result);
            }
            result = new Result('user register', user, 'register_succ', 200);
            res.json(result);
        })
    });
}

//name,message,code,status
/**
 * 用户登录
 * @param {[object]} req [description]
 * @param {[object]} res [description]
 */
exports.Login = function(req, res) {
    var _user = new User({
        username: 'admin1',
        password: 'admin'
    });

    var result = null;

    User.findByName(_user.username, function(err, user) {
        if (err) {
            result = new Result('login err', '验证用户名失败', 'username_error', 500);
            res.json(result);
            return;
        }

        if (user) {
            //比较下确认密码
            user.comparePassword(_user.password, function(err, isMatch) {

                if (err) {
                    result = new Result('login err', '密码有误', 'password_err', 500);
                    res.json(result);
                    return;
                }
                //密码验证通过
                if (isMatch) {
                    //获取Token
                    var token = jwt.sign({
                        id: user._id
                    }, secret.secretToken, {
                        expiresInMinutes: secret.TOKEN_EXPIRATION
                    });
                    //放入Redis
                    //TokenManager.SetToken(token,user);
                    result = new Result('login succ', {
                        'token': token
                    }, 'success', 200);
                } else {
                    result = new Result('login err', '密码有误', 'password_err', 500);
                }
                res.json(result);
            })

        } else {
            result = new Result('login err', '验证用户名失败', 'username_error', 500);
            res.json(result);
        }
    })
}


/**
 * 查看用户名是否存在
 * @param {[object]} req [description]
 * @param {[object]} res [description]
 */
exports.UserExists = function(req, res) {
    var username = req.query.username;
    var result = null;
    User.findByName(username, function(err, user) {
        if (err) {
            result = new Result('user valid', '验证用户名失败', 'username_error', 500);
            res.json(result);
            return;
        }

        if (user) {
            result = new Result('user valid', '用户名已经存在', 'username_exists', 200);
        } else {
            result = new Result('user valid', '用户名没有存在', 'username_noexists', 200);
        }
        res.json(result);
    })

}
