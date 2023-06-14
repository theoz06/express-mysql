const express = require('express');

const router = express.Router();
const userCOntrollers = require('../controllers/users');

router.get('/', userCOntrollers.getAllUsers);

router.get('/:id', userCOntrollers.getUserById);

//create data
router.post('/', userCOntrollers.createUser);

router.put('/:id', userCOntrollers.updateUserById);

router.delete('/:id', userCOntrollers.deleteUserById);

module.exports = router;