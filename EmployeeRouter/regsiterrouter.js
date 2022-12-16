const express=require("express");
const register=require("../Employeemodule/register")
const router=express.Router();

router.post("/signin",register.signin)
router.post("/signup",register.signup) 
router.post("/forget-password",register.forget)

module.exports=router;