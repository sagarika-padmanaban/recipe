const recipes = require('../models/RecipeBlog');
const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer= require('multer')
const router = express.Router();
router.use(bodyparser.json());
router.use(cors());
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       const filename = Date.now() + '-' + file.originalname;
//       cb(null, filename)
//     }
//   })
  
// const upload = multer({ storage: storage })

router.post('/post',async(req,res)=>{
    try {
        const {title,author,ingredients,direction,image} = req.body;
        console.log(image);
        const user = await recipes.create({
                title,
                author,
                ingredients,
                direction,
                image
            })
            console.log(user);

            return res.status(200).json({
                user
            })
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


router.get('/:id',async(req,res)=>{
    try {
        const data = await recipes.find({_id:req.params.id});
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
// router.get('/image/:filename',async(req,res)=>{
//     console.log(`./uploads/${req.params.filename}`);
//     res.sendFile(path.join(__dirname, `./uploads/${req.params.filename}`))
// })


module.exports = router