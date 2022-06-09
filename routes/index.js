const express=require('express');
const { route} = require('express/lib/application');
const usercontroller=require('../controller/usercontroller');

const router=express.Router();
router.post('/create/:email/:srch',usercontroller.create);
router.get('/history/:email',usercontroller.history);
module.exports=router;