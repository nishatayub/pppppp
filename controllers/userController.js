const User = require("../models/userModel");

const addUser = async(req,res)=>{
    try{
        const { name,email,password } = req.body;
        if(name === ""){
           return res.status(400).send("Username cannot be empty");
        }
        else if(email === ""){
            return res.status(400).send("email cannot be empty")
        }
        else if(password === ""){
            return res.status(400).send("Password cannot be empty")
        }
        else{
            const newUser = new User({
                name, email, password
            })
            await newUser.save();
            return res.status(201).send(newUser);
        }
    }catch(err){
        console.error(err.message);
    }
}

module.exports = { addUser }