export const index_page = (req, res) => {
  const data = {
    title: "Get IMG APP",
  };
  res.render("index", data);
};
