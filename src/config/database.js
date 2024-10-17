const mysql = require('mysql2'); 
const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : '' , 
    database: 'rest-api-express'
  });


  module.exports = dbpool.promise()