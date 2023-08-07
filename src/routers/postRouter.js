const postController = require("../controllers/postController");
const express = require("express");

const postRouter = express.Router();

postRouter.get("/", postController.getPosts);
postRouter.get("/d", (req, res) => {
    res.send("Dick")
})
module.exports = postRouter;