import User from "../models/User";
import Comment from "../models/Comment";
import Product from "../models/Product";

export const mainController = async (req, res) => {
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

export const searchController = (req, res) => {
  res.render("search");
};

export const hotelController = async (req, res) => {
  const Productlist = await Product.find();

  console.log(Productlist);
  res.render("hotel", { list: Productlist });
};

export const motelController = (req, res) => {
  res.render("motel");
};

export const campingController = (req, res) => {
  res.render("camping");
};

export const glampingController = (req, res) => {
  res.render("glamping");
};

export const hanokController = (req, res) => {
  res.render("hanok");
};

export const pensionController = (req, res) => {
  res.render("pension");
};

export const resortController = (req, res) => {
  res.render("resort");
};
