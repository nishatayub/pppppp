const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const Port = process.env.PORT || 8080;
const {connectDB} = require("./config/db")
const userRouter = require("./routes/userRoute")
app.use(express.json())
app.use("/",userRouter);

app.listen(Port, async()=>{
    try{
        await connectDB()
        console.log(`listening on port ${Port}`);
    }
    catch(err){
        console.error(err.message);
    }
});

