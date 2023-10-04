const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const fileUpload = require("express-fileupload");

const { connect } = require("./api");

const nftRoutes = require("./routes/nft_routes");

const app = express();

//dot env config
dotenv.config();
//middlewares
app.use(express.json());

//connect mongoose
connect();

app.use(cors({ origin: "*", credentials: true }));
//routes
app.use("/nfts", nftRoutes);

app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(__dirname, "uploads")));

//create server
app.listen(process.env.PORT, () => {
  console.log(`server started ${process.env.PORT}`);
});
