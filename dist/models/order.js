"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var orderSchema = new mongoose_1.Schema({
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
                type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
var Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
//# sourceMappingURL=order.js.map