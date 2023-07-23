const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
//x const {connectDB} = require('./config/db');
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
var cors = require("cors");

//configure env
dotenv.config();

//connect database
connectDB();

//rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send(
    // message:"welcome to my e-commerce app"
    "<h1> Welcome to the E-commerce MERN App </h1>"
  );
});

// port as per dotenv
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  // console.log("server running on 8080");
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
