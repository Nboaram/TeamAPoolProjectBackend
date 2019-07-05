const express = require('express');
const router = express.Router();
var User = require('./userSchema');

router.get('/username', (req, res) => {
    return User.UsersModel.find().then((doc) => {
        return res.send(doc);
    });
});
module.exports = router;