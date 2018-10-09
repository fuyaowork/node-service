//引入express中间件
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const {successResult,errorResult,errorMessage} = require("./help/resultHelp");

/**
 * 查库
 * @param  {[type]} doc [description]
 * @return {[type]}     [description]
 */
const search = (hiveStr) => {
    // return Label.create(doc, options);
    return new Promise(function(resolve, reject) {
        resolve(hiveStr);
    });
}
/**
 * 接口
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
const hiveSearch = (req, res) => {
    let keyName = req.query.keyName;
    let tableName1 = req.query.tableName1;
    let tableName2 = req.query.tableName2;
    let condition = req.query.condition;

    let sqlStr = 'select '+keyName+' from '+tableName1+' '+condition;
    search(sqlStr).then(result => {
        return res.json(successResult(result));
    })
    .catch(err => {
        return res.json(errorResult(err));
    });
}
router.get('/hiveSearch', hiveSearch);

//静态文件路径
app.use(express.static(path.join(__dirname, 'view')));

app.use("/", router);

//监听端口为8009
var server = app.listen(8009, function () {
    console.log('Example app listening at http://localhost:8009');
});