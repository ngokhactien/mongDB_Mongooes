"use strict";

//1 repuire mongooes 
var mongoose = require('mongoose'); //2 connect


mongoose.connect('mongodb://localhost/myDataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); //myDataBase là của db database (use myDataBase)
//3 tao schema    		// khai báo những cái field có trong object của chúng ta , lưu gì database ghi vào 

var userSchema = new mongoose.Schema({
  name: String,
  age: Number
}); // //4 tao  model để kết nối dữ liệu 

var user = mongoose.model('user', userSchema); //user là tên của model 
//const user = mongoose.model('user' , userSchema , "shopping" );    //user là tên của model ,  "shopping"  là tên collection
// CRUD
// user.create([
//     {name :'tao1', age :231},
//     {name :'Tam1', age :17 }
// ], (err , res)=>{
//     console.log(res);
// });
// user.find().exec((err , users)=>{
//     console.log(users);
// });
// cách 1
// user.update({name : 'khactien1'} , {name: 'khactien12'})
// .exec((err , result )=>{
//     console.log(result);
// });
// cách 2
// user.update({name : 'khactien12'} , {name: 'khactien'} , (err, res)=>{
//     console.log(res);
// });
// user.remove({name: 'khactien'})
// .exec((err , result )=>{
//     console.log(result);
// });