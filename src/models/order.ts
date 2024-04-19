import mongoose, { Schema } from "mongoose";
import { IOrder } from "../types";

const orderSchema = new Schema<IOrder>(
  {
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        name: { 
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    deliveryAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    paymentDetails: {
      type: Object,
      required: false,
    },
    paymentIntentId: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
