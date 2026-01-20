import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db-connection.js';
import emailRouter from './routes/email-routes.js';
import EventEmmiter from "events";

dotenv.config();
// const buf_string = Buffer.alloc(6);
// console.log(buf_string);
const event = new EventEmmiter();

event.on("send", () => {
    console.log("The Event triggered");
});

event.emit("send");
const app = express();
const port = 9000;

app.use(express.json());

connectDB();

// Routes
app.use('/api', emailRouter);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});