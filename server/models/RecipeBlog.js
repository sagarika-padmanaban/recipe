const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blogrec = new Schema({
  title: String,
  author: String,
  image:String,
  direction:String,
  ingredients:String,
  usermail:String,
});


const recipes = mongoose.model('recipeslist',Blogrec);
module.exports = recipes;