import Stripe from "stripe";
import { Request, Response } from "express";
import Order from "../models/order";

export const webhookHandler = async (request: Request, response: Response) => {
  try {
    const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-04-10",
    });

    const sig = request.headers["stripe-signature"] as string
    const event = stripeClient.webhooks.constructEvent(
        request.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
    )

    if(event.type === "charge.succeeded") {
        const charge = event.data.object as unknown as Stripe.Charge

        const order = await Order.findOne({
            paymentIntentId: charge.payment_intent,
        })

        if(order) {
            order.paymentStatus = "paid"
            order.paymentDetails = charge
            await order.save()
        }
    } else if(event.type === "charge.failed") {
        const charge = event.data.object as unknown as Stripe.Charge

        const order = await Order.findOne({
            paymentIntentId: charge.payment_intent,
        })

        if(order) {
            order.paymentStatus = "failed"
            order.paymentDetails = charge
            await order.save()
        }
    }

    response.send({received: true})
  
  
  } catch (error) {
       console.error('error in webhookHandler', error);
       throw error;
  }
}