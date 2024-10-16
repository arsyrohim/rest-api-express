const express = require('express'); 
const UserController = require('../controller/users')

const router = express.Router() ; 
router.post('/' , UserController.CreateNewUser);
router.get('/' , UserController.getAllUsers); 
router.patch('/:idUser' , UserController.UpdateUser)
router.delete('/:idUser' , UserController.deleteUser)


module.exports = router ;

