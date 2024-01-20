import mongoose from "mongoose"
async function connectToDb(url) {
  return mongoose.connect(url);
}

module.exports = { connectToDb };
