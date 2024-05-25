import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import connectDB from './connection/connection.js';
const app = express();

dotenv.config();
const port = 8000;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',userRoutes);
app.use('/',blogRoutes);

const username = process.env.DB_username;
const password = process.env.DB_password;
connectDB(username,password);

app.listen(port,()=>{
    console.log("Server is working");
})