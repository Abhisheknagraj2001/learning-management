import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";


dotenv.config({});
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
    console.log(`❌ No route matched: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ error: "Route not found" });
  });
  


app.listen(PORT,()=>
{
    console.log(`server listen at port ${PORT}`);
}
)