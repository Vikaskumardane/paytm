//creating the mongodb instents
const mongoose = require("mongoose");


//connecting the DB to the mongoose compus
mongoose.connect(MONGO_URL);

//creating the schema for users

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLemgth:6,
        maxLength:15
    },
    password:{
        type: String,
        required: true,
        minLength:6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength:15
    },
    lastName:{
        type: String,
        reuired: true,
        trim: true,
        maxLength:15
    }
});

//crating a model from the schema 
const User = mongoose.model("User",userSchema );

module.exports={
    User
};