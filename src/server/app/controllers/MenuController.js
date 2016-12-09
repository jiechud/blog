var Menu = require('../models/Menu.js');
var Result = require('../viewmodels/result.js')


/**
 * 获取所有菜单列表
 * @param  {[object]} req [request 对象]
 * @param  {[object]} res [response 对象]
 * @return {[json]}     [所有菜单json对象]
 */
exports.All = function(req, res) {
    //console.log();
    Menu.fetch(function(err, menus) {
        var result = null;
        if (err) {
            result = new Result('menu list', err.message, err.code || '', 500);
            return res.json(result);
        }

        result = new Result('menu list', menus, '', 200);
        res.json(result);
    })
};


/**
 * 添加一个菜单对象
 * @param  {[object]} req [request 对象]
 * @param  {[object]} res [response 对象]
 * @return {[json]}     [所有菜单json对象]
 */
exports.Post = function(req, res) {
    var _menu = new Menu({
        name: 'NET',
        url: '/NET',
        icon: ''
    });
    _menu.save(function(err, movie) {
        var result = null;
        if (err) {
            console.log(err);
            result = new Result(false, "add error");
        }
        result = new Result(true, "add success");
        res.json(result);
    });
}
