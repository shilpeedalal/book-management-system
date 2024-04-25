const userModel = require('../models/userModel.js')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async(req,res) => {
    try {
        const {name, email, password} = req.body
       
        if(!name || !email || !password){
            res.status(400).json({message: "Please provide all the details"})
        }

        const userAvailable = await userModel.findOne({email})
        if(userAvailable){
            res.status(400).json({message: "User already exists"})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser = new userModel({name, email, password: hashedPassword})
    
        await newUser.save()
        
        if(newUser){
            res.status(201).json({_id: newUser.id, email: newUser.email})
        } else {
            res.status(400).json("User is not created")
        }
        
    } catch(error) {
        res.status(500).json({message: "Internal server error", error: error})

    }
}

const login = async(req,res) => {
    try{
        const {email, password} = req.body
        // console.log(req.body);
        if(!email || !password){
            res.status(400).json({message: "Please provide all the details"})
        }

        const user = await userModel.findOne({email})
        if(user && (await bcrypt.compare(password, user.password))){
            const accessToken = jwt.sign({
                user:{
                    name: user.name,
                    email: user.email,
                    id: user.id
                },
            },
            process.env.Secret_key,
            {expiresIn : "10m"}
        )
        res.status(200).json({accessToken})
        } else{
            res.status(401).json({message: "Email or password is invalid or incorrect"})
        }

    } catch(error) {
        res.status(500).json({message: "Internal server error", error: error})
    }
}

module.exports = {register, login}