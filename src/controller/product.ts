import { Request, Response } from 'express';
import Product from '../models/product';
import { IProduct } from '../types';

type CreateProductRequestType = Pick<
    IProduct,
    "name" | "description" | "price" | "imageUrl"
>

export const createProduct = async (request: Request, response:Response) => {
  try {
    const {name, description, price, imageUrl}:CreateProductRequestType = request.body
    
    const product = await Product.create({
        name,
        description,
        price,
        imageUrl
    })

    response.send(product)
  
  } catch (error) {
       console.error('error in createProduct', error);
       throw error;
  }
}


export const getAllProduct = async (request: Request, response:Response) => {
  try {
    const products = await Product.find()
    response.send(products)
  
  
  } catch (error) {
       console.error('error in getAllProduct', error);
       throw error;
  }
}


export const getProductById = async (request: Request, response:Response) => {
  try {
    const { id } = request.params

    const product = await Product.find({_id:id})

    response.send(product)
  
  
  } catch (error) {
       console.error('error in getProductById', error);
       throw error;
  }
}