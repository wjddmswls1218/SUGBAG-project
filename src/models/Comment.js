import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    nickName: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    lastUpdate: {
      type: String,
      required: true,
    },

    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Comment`, Comment, `Comment`);
