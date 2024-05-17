const express = require('express')

const User = require('../db/model/userModel')

const router = express.Router();

router.post('/signup', async (req, res) => {
    let newUser = await User(req.body);
    newUser.save();
})






module.exports = router;

