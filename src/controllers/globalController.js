export const testController = async (req, res) => {
  const {
    query: { searchValue },
  } = req;

  console.log(searchValue);

  res.render("base");
};
