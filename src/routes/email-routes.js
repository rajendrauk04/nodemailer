import { Router } from "express";
import sendTestMail from "../controllers/send-email-api.js";

const emailRouter = Router();

emailRouter.post('/send-email', sendTestMail);

export default emailRouter;