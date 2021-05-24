const mysql = require('mysql');

const mysqlConfig = {
   host: 'localhost',       
   user: 'root',
   password: '',
   database: 'mibeln'   
}

const conn = mysql.createConnection(mysqlConfig);

conn.connect(err => {
   if(err) {
     console.log(err)
      return err
   }else {
      console.log('ok')
   }   
})

// const express = require("express");
// const http = require('http');
// const app = express();

// app.get("/", function(request, response){    
//    console.log(1)  
//    response.setHeader('Access-Control-Allow-Origin', '*');
//    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//    response.send(JSON.stringify({name: 'cccc'}));
// });

// app.use("/other", function(request, response){
//    console.log(2)
//    let id = request.query.id;
//    let userName = request.query.name;
//    response.setHeader('Access-Control-Allow-Origin', '*');
//    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//    response.send(JSON.stringify({name: 'cccc'}));
// });

// app.listen(5000);

// http.createServer((request, response) => {      
//    response.setHeader('Access-Control-Allow-Origin', '*');
//    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//    response.end(JSON.stringify({ name: 'ok' }));
// }).listen(5000);




 