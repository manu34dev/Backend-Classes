import express from "express";
import { 
    LoginController, 
    registerUserController, 
    verifyMailValidationToken, 
    forgorPasswordController, 
    ResetTokenController} 
    from "../controllers/auth.controller.js";
import { verifyApikeyMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router()

authRouter.post('/register',verifyApikeyMiddleware, registerUserController)
authRouter.get('/verify/:verification_Token', verifyMailValidationToken)
authRouter.post('/login',verifyApikeyMiddleware, LoginController)
authRouter.post('/forgot-password',verifyApikeyMiddleware, forgorPasswordController)
authRouter.put('/reset-password/:reset_token', verifyApikeyMiddleware ,ResetTokenController)

export default authRouter