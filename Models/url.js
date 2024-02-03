import mongoose from "mongoose"

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'users'
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamps: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const Url = mongoose.model("url",urlSchema);

export default Url
