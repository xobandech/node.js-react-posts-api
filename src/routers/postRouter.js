const postController = require("../controllers/postController");
const express = require("express");
const postRouter = express.Router();

postRouter.get("/posts", postController.getPosts);

postRouter.get("/posts/:id", postController.getPostById);

postRouter.post("/posts/", postController.createPost);

postRouter.delete("/posts/:id", postController.deletePostById);

postRouter.patch("/posts/:id", postController.patchPostById);

module.exports = postRouter;
