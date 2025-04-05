import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";


dotenv.config({});
connectDB();

const app =express();

const PORT=process.env.PORT || 3000;
//defalut middleware
app.use(express.json());
app.use(cookieParser);
app.use(cors({
    origin:"http://localhost:8080",
    Credentials:true
}));

//apis
app.use("/api/v1/user",userRoute );


app.listen(PORT,()=>
{
    console.log(`server listen at port ${PORT}`);
}
)