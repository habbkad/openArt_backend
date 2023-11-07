const express = require("express");

const {
  getNft,
  getNfts,
  createNft,
  deleteNft,
  searchNft,
  updateNft,
} = require("../controllers/nft_controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Set up storage for uploaded files

// Create the multer instance

const Router = express.Router();

Router.route("/").get(getNfts).post(upload.array("files", 3), createNft);

Router.route("/:id").put(updateNft).delete(deleteNft).get(getNft);

module.exports = Router;
