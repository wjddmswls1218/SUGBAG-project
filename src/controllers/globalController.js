export const mainController = async (req, res) => {
  const {
    query: { searchValue },
  } = req;

  console.log(searchValue);

  res.render("main");
};

export const hotelController = (req, res) => {
  res.render("hotel");
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
