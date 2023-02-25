const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blog = new Schema({
  email: String,
  password: String,
 
});


const recipelog = mongoose.model('recipelogin',Blog);
module.exports = recipelog;