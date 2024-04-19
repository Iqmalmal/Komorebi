export interface IProduct {
    _id:string
    name: string
    description: string
    price: number
    imageUrl: string
    createdAt: string
    updatedAt: string
}


export interface IUSer {
    name: string
    email: string
}


export interface IOrderItem {
    name: string
    quantity: number
    imageUrl: string
    price: number
    productID: string
}


export interface IDeliveryAddress {
    address: string
    city: string
}


export interface IOrder {
    _id:string
    user: IUSer
    orderItems: IOrderItem[]
    deliveryAddress: IDeliveryAddress
    paymentDetails: {}
    paymentIntentId: string
    totalPrice: number
    paymentStatus: string
    createdAt: string
    updatedAt: string
}

