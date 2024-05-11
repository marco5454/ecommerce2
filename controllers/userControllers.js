const getUser = (req, res) => {
  res.status(200).json({ message: "fetched user!" });
};

const createUser = (req, res) => {
  res.status(201).json({ message: "user created!" });
};

const updateUser = (req, res) => {
  res.status(200).json({ message: "udpated user!" });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: "deleted user!" });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
