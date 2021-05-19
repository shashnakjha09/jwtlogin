const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let userSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    phone: {
        type: Number,
        required : true
    },
    work: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    cpassword: {
        type: String,
        required : true
    },
    tokens : [
        {
        token : {
            type: String,
            required : true
        }
    }
    ]

}, {
        collection: 'register'
    });

    
    userSchema.methods.generateAuthToken  = async function(){
        console.log("this is from token");
        try{
            let tokenuser = jwt.sign({_id : this._id} , process.env.SECRET_KEY);
            this.tokens = this.tokens.concat({token : tokenuser});
            await this.save()
            return tokenuser;
           
        }catch(err){
            console.log(err);
        }
    }

    const User  = mongoose.model('Register', userSchema);
    
    module.exports = User;