const getProducts = (req, res) => {
  res.status(200).json({ message: "get products!" });
};

const createProduct = (req, res) => {
  res.status(201).json({ message: "product created!" });
};

const updateProduct = (req, res) => {
  res.status(200).json({ message: "product created!" });
};

const deleteProduct = (req, res) => {
  res.status(200).json({ message: "product deleted!" });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
