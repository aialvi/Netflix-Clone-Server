const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Backend server is running");
});
