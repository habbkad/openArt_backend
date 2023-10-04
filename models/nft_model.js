const mongoose = require("mongoose");

const { Schema } = mongoose;

const nftSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    ether_link: {
      type: String,
    },
    ipfs_link: {
      type: String,
    },
    meta_data: {
      type: String,
    },
    current_bid: {
      type: Number,
    },
    auctionTime: {
      type: String,
      required: true,
    },
    nft_picture: {
      type: [String],
    },
    hotbid: {
      default: false,
      type: Boolean,
    },
    sold: {
      default: false,
      type: Boolean,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);

const nftModel = mongoose.model("nfts", nftSchema);

module.exports = nftModel;
