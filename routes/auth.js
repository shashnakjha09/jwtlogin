const express = require('express');
const router = express.Router();
const User = require("../Models/userSchema")
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');


router.post('/register' , async (req , res) => {
    
    const { name , email , phone , work , password , cpassword } = req.body

    if(!name || !email || !phone || !work || !password || !cpassword){
        return  res.status(422).json({error: "fill all the fields"});
    }

    try{
        const userExist = await User.findOne({email : email});
    
        if(userExist){
            return  res.status(422).json({error: "User Already Exists"})
        }

        else if(password !== cpassword){
            return  res.status(422).json({error: "password is not matching"})
        }
        else{
            const user = new User({name:name , email:email , phone:phone , work:work , password:password , cpassword:cpassword})

            const salt = await bcrypt.genSalt(12);
            user.password = await bcrypt.hash(user.password, salt);
            user.cpassword = await bcrypt.hash(user.cpassword, salt);

            await user.save();
            res.status(201).json({message: "user registed successfully"})
        }
        
    }catch(err){
        console.log(err);
    }   
})

router.post('/login' , async (req , res) => {
    
    try{

        const { email , password } = req.body;

        if(!email || !password){
            res.status(400).json({message: "please filled all details"})
        }

        const userLogin = await User.findOne({email : email});
        
        
        if(userLogin){
              const ismatch = await bcrypt.compare(password , userLogin.password);
             
              let token;
              token = await userLogin.generateAuthToken();
              
             res.cookie("jwtoken" , token, {
                    expires : new Date(Date.now() + 5885950400000),
                    httpOnly : true,
                });

            
            if(!ismatch){
                res.status(400).json({error:"invalid credential"});
            }
            else{
                  res.json({message:"user login successful"})
           
            }
            
        }
        else{
        
            res.status(400).json({error:"Invalid Credentials"});
        }
        
        
    }catch(err){
          console.log(err);
    }

});


router.get("/about" , authenticate , (req , res) => {
    res.send(req.rootUser);
})


router.get("/contact" , authenticate , (req , res) => {
    res.send(req.rootUser);
})


router.get("/logout" , authenticate , (req , res) => {
    console.log("hello from logout");
    res.clearCookie("jwtoken" , {path:"/"})
    res.status(200).send("user is loggedout");
})


router.get("/toggler" , authenticate , (req , res) => {
    console.log("hello from toggler");
    res.status(200).send("user is toggled");
})


module.exports = router