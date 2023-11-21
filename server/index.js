const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connection successfull", process.env.MONGO_URL);
}).catch((err) => console.log(err.message));

app.use("/api/auth", authRoutes);

const server =app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`);
})