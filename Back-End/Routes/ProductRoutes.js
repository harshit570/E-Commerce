import express from 'express';
import { createProduct, createProductReview, deleteProduct, deleteReview, getAdminProducts, getAllProducts, getProductReviews, getSingleProduct, updateProduct} from '../Controller/ProductController.js';
import { roleBasedAccess, verifyUserAuth } from '../Middleware/userAuth.js';
import { get } from 'mongoose';

const Router= express.Router();

Router.route('/products')
.get(getAllProducts);

Router.route('/admin/products').get(verifyUserAuth,roleBasedAccess("admin"),getAdminProducts);

Router.route('/admin/product/create').post(verifyUserAuth,roleBasedAccess("admin"),createProduct);

Router.route("/admin/product/:id")
.put(verifyUserAuth,roleBasedAccess("admin"),updateProduct)
.delete(verifyUserAuth,roleBasedAccess("admin"),deleteProduct)

Router.route('/product/:id').get(getSingleProduct);
Router.route('/review').post(verifyUserAuth,createProductReview);
Router.route('/reviews').get(getProductReviews).delete(verifyUserAuth,deleteReview);


export default Router;