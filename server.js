const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productsRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`System is running ${PORT} port`);
});
