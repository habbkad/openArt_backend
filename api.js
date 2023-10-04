const mongoose = require("mongoose");
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_API).then(() => {
      console.log(`MongoDb server connected `);
    });
  } catch (error) {
    console.log(`Mongo db error: ${error.message}`);
  }
};
