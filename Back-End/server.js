
import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config({ path: "Back-End/config/config.env" });
import {v2 as cloudinary} from 'cloudinary'
connectDB();
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET 
})


// console.log(myname);
process.on('uncaughtException',(err)=>{
  console.log(`Error:${err.message}`);
  console.log('server is shutting down to unhandled exeption');
  process.exit(1);
})

const port=process.env.PORT || 3000;
const server=app.listen(port,()=>{
  console.log(`Server is working on http://localhost:${port}`);
})

// mongodb name or anything changes
process.on('unhandledRejection',(err)=>{
  console.log(`Error : ${err.message}`);
  console.log('server is shutting down due to unhandeled promise rejection');
  server.close(()=>{
    process.exit(1);
  })
})