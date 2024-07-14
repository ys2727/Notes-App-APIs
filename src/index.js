const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());

app.use(cors());



app.use("/user" , userRouter);
app.use("/note" , noteRouter);

app.get("/",(req,res)=>{
    res.send("notes app API from yashCode ");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT , () =>{
        console.log("server started on port no." + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})

