"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_1 = require("../controller/product");
var productRoute = express_1.default.Router();
productRoute.post("/create", product_1.createProduct);
productRoute.get("/all", product_1.getAllProduct);
productRoute.get("/id/:id", product_1.getProductById);
exports.default = productRoute;
//# sourceMappingURL=product.js.map