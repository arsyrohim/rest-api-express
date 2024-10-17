const dbpool = require('../config/database')


const getAllusers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbpool.execute(SQLQuery)
}


module.exports = {getAllusers}