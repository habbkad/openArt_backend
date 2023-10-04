const express = require("express");
const {
  getNft,
  getNfts,
  createNft,
  deleteNft,
  searchNft,
  updateNft,
} = require("../controllers/nft_controller");
// const multer = require("multer");
// const upload = multer({ dest: "../uploads/" });
const Router = express.Router();

Router.route("/").get(getNfts).post(createNft);

Router.route("/:id").put(updateNft).delete(deleteNft).get(getNft);

module.exports = Router;
