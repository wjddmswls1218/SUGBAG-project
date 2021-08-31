const User = require("../models/User");
const Comment = require("../models/Comment");
const Product = require("../models/Product");
const axios = require("axios");

const mainController = async (req, res) => {
  const {
    query: { searchValue },
  } = req;

  console.log(searchValue);

  try {
  } catch (e) {
    console.log(e);
    res.render("main");
  }

  res.render("main");
};

const searchController = (req, res) => {
  res.render("search");
};

const hotelController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });

  const newData_H = Productlist.filter((data) => data.divide == "hotel");

  console.log(newData_H);

  res.render("hotel", { hList: newData_H });
};

const motelController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });
  const newData_M = Productlist.filter((data) => data.divide == "motel");

  res.render("motel", { mList: newData_M });
};

const campingController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });
  const newData_C = Productlist.filter((data) => data.divide == "camping");

  res.render("camping", { cList: newData_C });
};

const glampingController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });
  const newData_G = Productlist.filter((data) => data.divide == "glamping");

  res.render("glamping", { gList: newData_G });
};

const hanokController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });

  const newData_K = Productlist.filter((data) => data.divide == "hanok");

  res.render("hanok", { kList: newData_K });
};

const pensionController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });
  const newData_P = Productlist.filter((data) => data.divide == "pension");

  res.render("pension", { pList: newData_P });
};

const resortController = async (req, res) => {
  const Productlist = await Product.find({ isDelete: false });
  const newData_R = Productlist.filter((data) => data.divide == "resort");

  res.render("resort", { rList: newData_R });
};

const menuController = (req, res) => {
  const loginFlag = req.userLoginFlag || false;

  let isAuthenticated = false;

  if (loginFlag) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    mainController(req, res);
  } else {
    res.render("main");
  }

  res.render("menu");
};

const loginController = async (req, res) => {
  const sess = req.session;
  let loginFlag = false;

  const input_id = req.body.input_id;
  const input_pass = req.body.input_pass;
  input_pass = String(input_pass);

  try {
    const result = await User.find();

    Promise.all(
      result.map((user) => {
        if (user.userId === input_id && user.password === input_pass) {
          loginFlag = true;

          sess.userId = user._id;
        }
      })
    );
    req.userLoginFlag = loginFlag;
    mainController(req, res);
  } catch (e) {
    console.log(e);
    console.log("[SYSTEN] 로그인에 실패하셨습니다.");

    mainController(req, res);
  }
};

const globalController = {
  mainController,
  searchController,
  hotelController,
  motelController,
  campingController,
  glampingController,
  hanokController,
  pensionController,
  resortController,
  loginController,
  menuController,
};

module.exports = globalController;
