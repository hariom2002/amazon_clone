// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://johnwick:johnwick123@cluster0.u5oubgy.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);

// connecting to mongoose
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
