const db = require('../config/database')

const getAllUsers = () =>{
    const sqlQuery = 'SELECT * FROM users';

    return db.execute(sqlQuery);
};

const createUser = (body)=>{
    const sqlQuery = `INSERT INTO users (nama, alamat)
                        VALUES ('${body.nama}', '${body.alamat}')`;

    return db.execute(sqlQuery);
}

const getUserById = (id) =>{
    const sqlQuery = `SELECT * FROM users WHERE idusers='${id}'`;

    return db.execute(sqlQuery);
}

const updateUserById = (body, id) => {
    const sqlQuery = `  UPDATE users 
                        SET nama='${body.nama}', alamat='${body.alamat}'
                        WHERE idusers=${id}`;

    return db.execute(sqlQuery);
}

const deleteUserById = (id)=>{
    const sqlQuery = `DELETE FROM users WHERE idusers='${id}'`;

    return db.execute(sqlQuery);
}

module.exports = {
     getAllUsers,
     createUser,
     getUserById,
     updateUserById,
     deleteUserById,                
}; 