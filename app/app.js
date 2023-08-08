const express = require("express");
const morgan = require("morgan");

const postRoutes = require("../src/routers/postRouter");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/", postRoutes);

app.listen(3000);
