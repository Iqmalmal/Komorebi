import express from 'express';
import { createProduct, getAllProduct, getProductById } from '../controller/product';

const productRoute = express.Router();

productRoute.post("/create", createProduct)
productRoute.get("/all", getAllProduct)
productRoute.get("/id/:id", getProductById)


export default productRoute;