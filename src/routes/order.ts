import { createOrder } from "../controller/order";
import express from "express";


const orderRoutes = express.Router();

orderRoutes.post("/create", createOrder);

export default orderRoutes;