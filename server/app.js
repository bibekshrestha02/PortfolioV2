const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./router/authRouter");
const details = require("./router/detailsRouter");
const contact = require("./router/contactRouter");
const path = require("path");

app.use(cors());

app.use(express.json());

app.use("/admin", auth);
app.use("/api", details);
app.use("/contact", contact);
app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html")); // relative path
});
module.exports = app;
