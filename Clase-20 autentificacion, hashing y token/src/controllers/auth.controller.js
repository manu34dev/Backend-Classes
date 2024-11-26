import ENVIROMENT from "../config/enviroment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const userExists = await User.findOne({ email: email })
        console.log(userExists)
        if (userExists) {
            const response = new ResponseBuilder()
            .setOk (false)
            .setStatus (400)
            .setMessage ("bad request")
            .setPayload ({
                detail: "el email ya esta registrado"
            })
            .build()
            return res.status(400).json(response)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const verificationToken = jwt.sign ({email: email}, ENVIROMENT.JWT_SECRET, {
            expiresIn: '1d'
        })
        
        const newUser = new User({
            name: name,
            email: email,
            password: hashPassword,
            emailVerified: false,
            verifucationToken: verificationToken
        })
        await newUser.save()

        const response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setMessage('created')
        .setPayload({})
        .build()
        res.status(201).json(response)
        
    } catch (error) {
        console.error('error al registrar usuario:', error)
        const response = new ResponseBuilder()
        .setOk (false)
        .setStatus (500)
        .setMessage ("internal server error")
        .setPayload ({
            detail: error.message
        })
        .build()
        return res.status(500).json(response)
    }
    
}
