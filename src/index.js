import express from "express";
import connectDb from "./dbConfig.js";
const app = express()
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/about",(req,res)=>{
    res.send("About us");
})

app.get("/contact_us",(req,res)=>{
    res.send("contact us");
})

app.listen(PORT || 4000, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
    connectDb();
})