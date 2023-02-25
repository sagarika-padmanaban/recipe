const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const port = 5082;
const login = require('./routes/login.js')
const recipe = require('./routes/recipe.js')

const app = express();

const uri = 'mongodb+srv://saga:saga@cluster0.q7tbooi.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(uri,(err)=>{
    if(err){
        console.log('failed');
    }
    else{
        console.log('successfull');
    }
})
app.use('/verify',login);
app.use('/recipe',recipe);

app.listen(port,()=>{
    console.log('app is up');
})