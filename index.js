const express = require('express');
const request = require('request');

const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


//app.use('*', createProxyMiddleware({target: "http://google.com", changeOrigin: true}));


let apiServer = 'https://freecodecamp.com'
app.use( function(req, res) {
  console.log(req.originalUrl)
  var url = apiServer + req.originalUrl
  req.pipe(request(url)).pipe(res)
});

app.listen(3000, ()=>{
  console.log('server started at 3000')
})
