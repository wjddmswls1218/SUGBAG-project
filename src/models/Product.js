import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    Pname: {
      type: String,
      required: true,
    },

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

    createdAt: {
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

    divide: {
      type: String,
      required: true,
    },
  },

  {
    versionKey: false,
  }
);

export default mongoose.model(`Product`, Product, `Product`);
