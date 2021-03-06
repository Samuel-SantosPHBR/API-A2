import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import './database';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server is on"));