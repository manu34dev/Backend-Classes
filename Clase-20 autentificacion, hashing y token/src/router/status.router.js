import express from "express";
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import { getPingController } from "../controllers/status.controller.js";

const statusRouter = express.Router()

statusRouter.get("/ping", getPingController)

export default statusRouter