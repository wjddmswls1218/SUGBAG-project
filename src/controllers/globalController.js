const User = require("../models/User");
const Comment = require("../models/Comment");
const Product = require("../models/Product");

const mainController = async (req, res) => {
  let loginFlag = req.userLoginFlag || false;

  let isAuthenticated = false;

  if (loginFlag === true) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    loginController(req, res);
  } else {
    res.render("main");
  }
};

const searchController = (req, res) => {
  res.render("search");

  const {
    query: { seq, searchValue },
  } = req;
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
  res.render("menu");
};

const loginController = async (req, res) => {
  let loginFlag = false;

  const input_id = req.body.input_id;
  const input_pass = req.body.input_pass;

  try {
    const result = await User.find();

    Promise.all(
      result.map((user) => {
        if (user.userId == input_id && user.password == input_pass) {
          loginFlag = true;
        }
      })
    );
    req.userLoginFlag = loginFlag;
    mainController(req, res);
    console.log("[SYSTEN] 로그인 성공");
  } catch (e) {
    console.log(e);
    console.log("[SYSTEN] 로그인에 실패하셨습니다.");
  }
};

const createController = (req, res) => {
  res.render("create");
};

const postcreateController = async (req, res) => {
  const {
    body: {
      product_name,
      prosuct_divide,
      product_price,
      product_createdAt,
      product_hostName,
      product_area,
    },
  } = req;

  try {
    const result = await Product.create({
      Pname: product_name,
      price: product_price,
      createdAt: product_createdAt,
      hostName: product_hostName,
      area: product_area,
      divide: prosuct_divide,
      isDelete: false,
      isSell: true,
      scope: 0,
    });
    mainController(req, res);
  } catch (e) {
    console.log(e);
    createController(req, res);
  }
};

const updataController = (req, res) => {
  res.render("updata");
};

const postUpdataController = async (req, res) => {
  try {
    const board = await Product.findOne({ _id: req.body.id });

    res.render("updata", { board: board });
  } catch (e) {
    console.log(e);
    res.render("");
  }
};

const deleteController = async (req, res) => {
  try {
    const productData = await Product.findOne({});
  } catch (e) {
    console.log(e);
    res.render("home");
  }
};

const postDeleteController = async (req, res) => {
  try {
    const result = await Product.updataOne(
      { _id: req.body.id },
      {
        $set: {
          isDelelte: true,
        },
      }
    );
  } catch (e) {
    console.log(e);
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
  createController,
  postcreateController,
  updataController,
  deleteController,
  postUpdataController,
  postDeleteController,
};

module.exports = globalController;
