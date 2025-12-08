import express from 'express';
import product from './Routes/ProductRoutes.js';
import user from './Routes/userRoutes.js';
import errHandleMiddleware from './Middleware/error.js';
import cookieParser from 'cookie-parser';
import order from './Routes/orderRoutes.js';
import fileUpload from 'express-fileupload';
const app=express();

// middleware
app.use(express.json())
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

// Error Middleware
app.use(errHandleMiddleware);

export default app;