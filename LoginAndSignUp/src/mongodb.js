const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LoginAndSignUp_DB')
.then(() =>{
    console.log('mongo connected 👍');
})
.catch(() => {
    console.log('Failed to connect!');
})


const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('LogInCollection' , LogInSchema );
module.exports= collection;