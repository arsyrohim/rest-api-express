const dbpool = require('../config/database')


const getAllusers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbpool.execute(SQLQuery)
}

const CreateNewUser =(body) => {
    const SQLQuery = `INSERT INTO users (nama , email, adress) 
                      VALUES ('${body.nama}', '${body.email}' , '${body.adess}')`
   return dbpool.execute(SQLQuery)                      
}


module.exports = {getAllusers , CreateNewUser}