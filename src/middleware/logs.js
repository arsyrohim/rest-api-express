const logs = (req, res , next) => {
 console.log('terjadi request ke' , req.path) 
 next()
}

module.exports = logs 