require('dotenv').config()
const  express  = require("express");
const mysql = require('mysql2');
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/logs')
const PORT = process.env.PORT || 5000
const app =  express(); 

app.use(middlewareLogRequest);
app.use(express.json())

app.use('/users' , usersRoutes) ;


app.listen(PORT , () => {
    console.log(`server berhasil di running port ${PORT}`)
});

