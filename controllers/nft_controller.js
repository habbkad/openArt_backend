const Nft = require("../models/nft_model");

//desc     get all nfts
//request  get
//access   public

exports.getNfts = async (req, res, next) => {
  try {
    const allNfts = await Nft.find();

    res.status(200).send({ message: `Get sucessfull.`, data: allNfts });
  } catch (error) {
    res
      .status(200)
      .send({ message: `Get unsucessfull.`, error: error.message });
  }
};

//desc     get single nfts
//request  get
//access   public

exports.getNft = async (req, res, next) => {};

//desc     create nfts
//request  post
//access   private

exports.createNft = async (req, res, next) => {
  console.log(req.body);
  const {
    title,
    details,
    creator,
    ether_link,
    ipfs_link,
    meta_data,
    current_bid,
    auctionTime,
    nft_picture,
    hotbid,
    sold,
    tags,
  } = req.body;
  try {
    const isPresent = await Nft.findOne({ title });
    if (isPresent) {
      return res.status(201).json({ error: `nft with same title present` });
    }

    const newNft = new Nft(req.body);
    await newNft.save();

    let images = [];
    for (let i of req.files) {
      images = [...images, `http://localhost:8000/${i.filename}`];
    }
    await Nft.findByIdAndUpdate(newNft._id, { nft_picture: images });
    res.status(200).send({ message: `nft uploaded successfully` });
  } catch (error) {
    res.status(404).send({ message: `error occured`, error: error.message });
  }
};

//desc     delet nfts
//request  post
//access   private

exports.deleteNft = async (req, res, next) => {};

//desc     update nfts
//request  post
//access   private

exports.updateNft = async (req, res, next) => {};
//desc     search nfts
//request  get
//access   public

exports.searchNft = async (req, res, next) => {};
