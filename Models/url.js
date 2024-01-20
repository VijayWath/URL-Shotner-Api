import mongoose from "mongoose"

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamps: { type: number },
      },
    ],
  },
  { timestamps: true }
);

const Url = mongoose.Model("url",urlSchema);

module.exports = Url;
