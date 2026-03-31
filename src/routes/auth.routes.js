const express=require("express")
const authController=require("../controllers/auth.controller");
const { registeruser } = require("../controllers/auth.controller");
const router=express.Router();

router.post('/register',authController.registeruser)

router.post('/login',authController.loginUser)

router.post('/logout',authController.logoutuser)


module.exports=router;