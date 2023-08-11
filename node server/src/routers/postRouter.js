const postController = require("../controllers/postController");
const express = require("express");
const postRouter = express.Router();

postRouter.post("/posts", postController.createPost);

postRouter.patch("/posts/edit/", postController.patchPostById);

postRouter.get("/posts", postController.getPosts);

postRouter.get('/posts/search', postController.searchPosts);

postRouter.get("/posts/:id", postController.getPostById);       

postRouter.delete("/posts", postController.deletePostById);

module.exports = postRouter;
