const User=require('../models/user');
module.exports.create=async function(req,res){
    try{
        
        let user=await User.findOne({email:req.params.email});
        if(user)
        {
            
            user.history.push(req.params.srch);
            user.save();
            return res.status(201).json({message:"Product Created"});
        }
        else
        {
            await User.create({email:req.params.email});
             user=await User.findOne({email:req.params.email});
            user.history.push(req.params.srch);
            await user.save();
            return res.status(201).json({message:"Product Created"});
    
        }
    }
    catch(e){
        console.log(e);
        return res.status(404);
    }
    
}
module.exports.history=async function(req,res){
    console.log('here');
    try{
        let user=await User.findOne({email:req.params.email});
        if(user)
        return res.status(200).json({
            data:user.history,
        })
        else
        {
            return res.status(200).json({
                data:[],
            }) 
        }

    }
    catch(e)
    {
        console.log(e);
return res.status(404);
    }
   

}