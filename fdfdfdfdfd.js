var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World!');
});

app.listen(3000, function () {
console.log('Пример разработки , который прослушивает 3000-ный порт!');
});