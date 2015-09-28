var PORT = 9000;
var express = require('express');
var app = express();

app.use( express.static(__dirname+'/lib' ));
app.use('/bower_components', express.static(__dirname + '/lib'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(PORT,function(){
  console.log('Application running on port 9000');
})