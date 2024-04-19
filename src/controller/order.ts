import { Request, Response } from 'express';
import { IOrder, IOrderItem } from '../types';
import Order from '../models/order';
import stripe from 'stripe';


type createOrderRequestType = Pick<
    IOrder,
    "user" | "orderItems" | "deliveryAddress"  | "totalPrice"
>


const BASE_UNIT = 100

const getTotalAmount = (orderItems: IOrderItem[]) => {
    return (orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * BASE_UNIT)
} 

/*
*
* @param request    
* @param response
* 
* 1. To make a request to stripe, its gonna return paymentIntent, we've  to pass currecncy and order amount
* 2. Save paymentIntentId in the order model
* 3. Return paymentIntent.client_secret
*  
*/

export const createOrder = async (request: Request, response: Response) => {
  try {
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-04-10",
    });

    const { user, orderItems, deliveryAddress, totalPrice }: createOrderRequestType = request.body


    const totalAmount = getTotalAmount(orderItems)


    const paymentIntent = await stripeClient.paymentIntents.create({
        amount: totalAmount,
        currency: 'myr'
    })



    const order = await Order.create({
        user,
        orderItems,
        deliveryAddress,
        totalPrice: totalAmount,
        paymentIntentId: paymentIntent.id,
        paymentStatus: "pending",
        paymentDetails: {}
    })

    response.send({
        clientSecret: paymentIntent.client_secret
    })
  
  
  } catch (error) {
       console.error('error in createOrder', error);
       console.log('Stripe secret key', process.env.STRIPE_SECRET_KEY)
       throw error;
  }
}