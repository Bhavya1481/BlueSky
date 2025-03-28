import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

cloudinary.config({
    cloud_name: "dubnqzxoq",
    api_key: "651182366624547",
    api_secret: "BMOlIzz2KQOjPUobpGGc9ZpuvSI",
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "5mb"}));   
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/notifications",notificationRoutes);
    

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
});

