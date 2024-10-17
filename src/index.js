const  express  = require("express");
const mysql = require('mysql2');
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')
const app =  express(); 

app.use(middlewareLogRequest);
app.use(express.json())

app.use('/users' , usersRoutes) ;


app.listen(4000 , () => {
    console.log('server berhasil di running port 4000')
});

