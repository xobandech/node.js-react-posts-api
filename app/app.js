const express = require("express");
const morgan = require("morgan");
const app = express();
const { PrismaClient } = require("@prisma/client")
const postRoutes = require('../src/routers/postRouter');
const prisma = new PrismaClient()
const myMiddleware = (req, res, next) => {
  console.log("myMiddleware applied");
  next()
};
app.use('/', postRoutes)
app.use(morgan("dev"));
app.use(myMiddleware);

app.listen(3000);

prisma.post.create({data: {
  message: "Hi", title:"Welcome"
}
}).then(() => console.log("succes"))