const recipelog = require('../models/Bloglogin');
const bodyparser = require('body-parser');
const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(bodyparser.json());
router.use(cors());
let usermail;

router.post('/register',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const data = await recipelog.findOne({email:email})
        if(data){
            return res.status(400).json({
                status:"failed",
                message:'user already exists'
            })
        }
        else{
            const user = await recipelog.create({
                email,
                password
            })
            return res.status(200).json({
                status:"success",
                message:'successfully registered'
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:"failed",
            message:error.message
        })
        
    }
})

router.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const data = await recipelog.findOne({email:email})
        if(data==null){
            return res.status(400).json({
                status:"failed",
                message:'user doesnt exists'
            })
        }
        else{
            if(password==data.password){
                usermail=data.email;
                return res.status(200).json({
                    status:"success",
                    message:'successfully logged in',
                    email:data.email
                })
            }
            else{
                return res.status(400).json({
                    status:"oopps!",
                    message:'check password'
                })
            }
        }
    } catch (error) {
        return res.status(400).json({
            status:"failed",
            message:error.message
        })
        
    }
})



router.get('/',async(req,res)=>{
    try {
        const data = await recipes.find();
        console.log(data);
            return res.status(200).json({
                status:"success",
                data
        })
    } catch (error) {
        return res.status(400).json({
            status:"failed",
            message:error.message
        })
        
    }
})

module.exports = router;