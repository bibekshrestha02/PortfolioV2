const app = require("./app");
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
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
