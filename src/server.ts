import express, { request, response } from 'express';
import *  as  dotenv from 'dotenv';
import conntecToDatabase from './db';
import productRoute from './routes/product';
import orderRoutes from './routes/order';
import { webhookHandler } from './webhook';
import cors from 'cors';

dotenv.config();

const app = express();  
app.use(cors());
app.use(express.json());

conntecToDatabase();


app.get("/ping", (request, response) => {
    response.send("pong")
})


app.post("/webhook", express.raw({type: "application/json"}), webhookHandler)

app.use("/product", productRoute)
app.use("/orders", orderRoutes)

const PORT  = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('http://localhost:1337')
    console.log(`Server is running on port`, PORT)
})