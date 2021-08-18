import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    Comment: {
      type: Array,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    isSell: {
      type: Boolean,
      required: true,
      default: true,
    },

    createAt: {
      type: String,
      required: true,
    },

    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },

    hostName: {
      type: String,
      required: true,
    },

    area: {
      type: String,
      required: true,
    },

    socpe: {
      type: Number,
      required: true,
    },
  },

  {
    versionKey: false,
  }
);

export default mongoose.model(`Product`, Product, `Product`);
