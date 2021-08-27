const User = require("../models/User");
const Comment = require("../models/Comment");
const Product = require("../models/Product");

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
  const Productlist = await Product.find();

  console.log(Productlist);
  res.render("hotel", { list: Productlist });
};

const motelController = (req, res) => {
  res.render("motel");
};

const campingController = (req, res) => {
  res.render("camping");
};

const glampingController = (req, res) => {
  res.render("glamping");
};

const hanokController = (req, res) => {
  res.render("hanok");
};

const pensionController = (req, res) => {
  res.render("pension");
};

const resortController = (req, res) => {
  res.render("resort");
};

const menuController = (req, res) => {
  res.render("menu");
};

const loginController = (req, res) => {
  res.render("login");
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
