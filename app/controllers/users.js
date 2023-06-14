const usersModel = require('../models/users')

const getAllUsers = async(req, res) => {
    
    try {
        const [data] = await usersModel.getAllUsers();

        res.json({
            message : "Get all users",
            data : data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage : error
        })
    }
    
};

const getUserById = async(req, res) => {
    try {
        const [data] = await usersModel.getUserById();
        res.json({
            message : `Get User by id ${req.params.id}`,
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage : error
        })
    }
};

const createUser = async(req, res) => {

    const {body} = req;

    try {
        await usersModel.createUser(body);
        res.json({
            message : "User created",
            body : body
        });
    } catch (error) {
        res.status(500).json({
            message : "Server Error!",
            serverMessage : error
        })
    }
};

const updateUserById = async(req,res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await usersModel.updateUserById(body, id);
        res.json({
            message : `id = ${id} Updated!`,
            data : {
                id : id,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message : "Server Error!",
            serverMessage : error
        })
    }
};

const deleteUserById = async(req, res) => {
    
    try {
        const [data] = await usersModel.deleteUserById(req.params.id)

        res.json({
            message:"Delete user success",
            data : {
                id : req.params.id,
                data : null
            }
        }) 
    } catch (error) {
        res.status(500).json({
            message : "Server Error!",
            serverMessage : error
        })
    }
    
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};