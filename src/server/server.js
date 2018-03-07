const express = require('express'),
    app = express(),
    https = require('https'),
    request = require('request');

app.all("*", function(req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header("Access-Control-Allow-Credentials", true);
        // 这里获取 origin 请求头 而不是用 *
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});

app.use('/api', (req, res) => {
    console.log(req.url);
    let url = "https://news-at.zhihu.com/api/4" + req.url;
    request({
        url: url,
        json: true
    }, (err, response, data) => {
        if(!err && response.statusCode === 200) {
            res.send(data);
        }else {
            res.send(JSON.stringify(response));
        }
    })
}).listen(1111, (e) => {
    if (e) throw e;
    console.log('app run at port:1111');
})