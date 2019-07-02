//createUser

let mongoose = require('mongoose');
let express = require('express');
let Users = require('./userSchema.js');
let app = express();

//express middlewear
app.listen(8080, () => {
    console.log('Listening on port 8080!')
});

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UserDB', {
        useNewUrlParser: true
    },
    function (conError) {
        if (conError) {
            console.log('oh shit');
        } else {
            console.log('oh yes');
        }
    });
app.use(express.json());

//createuser
app.post('/createUser', async (req, res) => {
    console.log(req.body);
    try {
        const newUser = new Users.UsersModel(req.body);
        const userDoc = await newUser.save();
        return res.status(201).send(userDoc);
    } catch (postError) {
        console.log(postError);
        return res.status(501).send(postError);
    }
});
