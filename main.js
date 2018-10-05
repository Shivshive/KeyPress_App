var robot = require("robotjs");
var express = require("express");
var app = express();

var path = require('path');
var index_file_path = path.join(__dirname,'assests','index.html');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('assests'));

app.get('/',(req,res)=>{
    res.sendFile(index_file_path);
});

app.get('/keytap/:key', function (req, res) {
    var key = req.param("key");
    console.log(key)
    if (key) {
        setTimeout(function () {
            try {
                robot.keyTap(key);
                res.send({
                    done: "Key is successfully performed.",
                    key_value: key
                });
            } catch (ex) {
                res.send({
                    done: "Key is not defined.",
                    key_value: key
                })
            }
        }, 1000);
    }
    else {
        res.send({
            done: "Blank key value."
        });
    }
});

app.listen(3000, function () {
    console.log('Hey! I am listening for keys... !!');
})