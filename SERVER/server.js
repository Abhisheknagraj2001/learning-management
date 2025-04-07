import dotenv from "dotenv";
dotenv.config();

import express from "express";
import fs from "fs";

import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
console.log("📂 .env file exists?", fs.existsSync(".env"));
console.log("📦 Loaded SECRET_KEY:", process.env.SECRET_KEY);


connectDB();

const app =express();

const PORT=process.env.PORT || 8080;
//defalut middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//apis
app.use("/api/v1/user",userRoute );




app.use((req, res, next) => {
   
    res.status(404).json({ error: "Route not found" });
  });
  


app.listen(PORT,()=>
{
    console.log(`server listen at port ${PORT}`);
}
)