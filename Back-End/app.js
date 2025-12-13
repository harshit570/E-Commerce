import express from 'express';
import product from './Routes/ProductRoutes.js';
import user from './Routes/userRoutes.js';
import errHandleMiddleware from './Middleware/error.js';
import cookieParser from 'cookie-parser';
import order from './Routes/orderRoutes.js';
import payment from './Routes/paymentRoutes.js';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
const app=express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,       
    tempFileDir: '/tmp/',
    parseNonFileFields: true
  })
);
app.use(cookieParser());

app.use("/api/v1", product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

// Error Middleware
app.use(errHandleMiddleware);
dotenv.config({path:"Back-End/config/config.env"});

export default app;