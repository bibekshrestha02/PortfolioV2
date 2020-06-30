const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./router/authRouter");
const details = require("./router/detailsRouter");
const contact = require("./router/contactRouter");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
dotenv.config({ path: "./confing.env" });
const DB = process.env.mogoosedb.replace("<password>", process.env.password);

mongoose
  .connect(
    DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log("connected to database");
    }
  )
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());

app.use("/admin", auth);
app.use("/api", details);
app.use("/contact", contact);
app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html")); // relative path
});
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
