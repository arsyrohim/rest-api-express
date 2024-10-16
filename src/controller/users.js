const getAllUsers = (req , res) => {
    const data = {
        id : '1' ,
        nama : "arif abdurohim" , 
        email : "abduarif45@gmail.com", 
        adress : "surakarta"
    }
     res.json({
        message : "GET all Users success", 
        data : data
     });
}; 

const CreateNewUser = (req , res) => {
    console.log(req.body)
     res.json({
        message : "POST New User success" , 
        data : req.body
    });
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