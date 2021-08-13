import mongoose from "mongoose";

const Schema = mongoose.Schema();

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    birthday: {
      type: String,
      required: true,
    },

    nickName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    paymethod: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`User`, User, `User`);
