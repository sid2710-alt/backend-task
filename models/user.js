const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
       },
    
     history:[{
        type: String,
        
     }] 


},{
    timestamps:true,
});
 const User=mongoose.model('User',userSchema);
 module.exports=User;