const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
require("./db/conn");
const app = express();
const cookieParser = require("cookie-parser");
const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router")
const productRoutes = require('./routes/router');

app.use(express.json());
app.use(cookieParser(""));
app.use(cors(
    
));
app.use(router);
app.use( productRoutes);

const port = 8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

DefaultData();