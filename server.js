// const mysql = require('mysql');

// const mysqlConfig = {
//    host: 'localhost',       
//    user: 'root',
//    password: '',
//    database: 'mibeln'   
// }

// const conn = mysql.createConnection(mysqlConfig);

// conn.connect(err => {
//    if(err) {
//      console.log(err)
//       return err
//    }else {
//       console.log('ok')
//    }   
// })

const express = require("express");
const http = require('http');
const app = express();

// app.get("/", function(req, res){       
   // req.setHeader('Access-Control-Allow-Origin', '*');
   // req.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//    req.send(JSON.stringify({name: 'cccc'}));
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

http.createServer((req, res, body) => {      
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');     
   const page = +req.url.replace(/[^\d]/g, '').split('')[0];
   const limit = +req.url.replace(/[^\d]/g, '').split('')[1];   
   const list = {
      count: 23, 
      items: [
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 1,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         },
         {
            id: 2,
            description: 'Защитник сборной России Марио Фернандес, получивший повреждение в матче с Финляндией, доставлен в больницу на обследование.'
         }
      ]
   }  
   if(req.url == `/list?page=${page}?limit=${limit}`) res.end(JSON.stringify({ count: list.count, items: list.items.slice((page - 1) * limit, page * limit)}));   
}).listen(5000);




 