const express = require("express");
const morgan = require("morgan");
  
const postRoutes = require("../src/routers/postRouter");
const app = express();

app.use("/", postRoutes);
app.use(morgan("dev"));

app.listen(3000);
