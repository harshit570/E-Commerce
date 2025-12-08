import express from "express";
import { roleBasedAccess, verifyUserAuth } from "../Middleware/userAuth.js";
import { AllMyOrders, createOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrderStatus } from "../Controller/orderController.js";
const router = express.Router();


router.route("/new/order").post(verifyUserAuth,createOrder);

router.route("/admin/order/:id")
.get(verifyUserAuth,roleBasedAccess("admin"), getSingleOrder)
.put(verifyUserAuth,roleBasedAccess("admin"), updateOrderStatus)
.delete(verifyUserAuth,roleBasedAccess("admin"), deleteOrder);

router.route("/admin/order")
.get(verifyUserAuth,roleBasedAccess("admin"), getAllOrders);

router.route("/orders/user")
.get(verifyUserAuth,AllMyOrders);

export default router;