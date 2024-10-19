const UsersModel = require('../models/users')

const getAllUsers = async (req , res) => {
    try {
    const [data] = await UsersModel.getAllusers() ;
     res.json({
        message : "GET all Users success", 
        data : data
     });
    } catch (error) {
         res.status(500).json({
            message : "error server" , 
            detail : error
         });
    }
    
}; 

const CreateNewUser = async (req , res) => {
    console.log(req.body)
    const {body} = req
        try {
            await UsersModel.CreateNewUser(body)
            res.json({
                message : "POST New User success" , 
                data : body
            });
        } catch (error) {
            res.status(500).json({
                message : "error server" , 
                detail : error
             });
        }
    
}; 

const UpdateUser = (req , res) => {
    const {idUser} = req.params ; 
    console.log(`idUsers : ${idUser}`)
     res.json({
        message : "UPDATE User success " ,
        data : req.body
    });
}; 

const deleteUser = (req , res) => {
    const {idUser} = req.params ; 
    console.log(`idUsers : ${idUser}`)
     res.json({
        message : "DELETE User success " ,
        data : {
            id : '2' ,
            nama : "arif abdurohim" , 
            email : "abduarif45@gmail.com", 
            adress : "surakarta"
        }
    });
}; 


module.exports = {
    getAllUsers , 
    CreateNewUser, 
    UpdateUser, 
    deleteUser
} ;