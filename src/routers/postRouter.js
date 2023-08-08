const postController = require("../controllers/postController");
const express = require("express");
const postRouter = express.Router();

postRouter.get("/posts", postController.getPosts);

postRouter.get("/posts/:id", postController.getPostById);

postRouter.post("/posts/create", postController.createPost);

postRouter.delete("/posts/delete/:id", postController.deletePostById);

module.exports = postRouter;
