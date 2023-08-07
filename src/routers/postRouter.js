const postController = require("../controllers/postController");
const express = require("express");
const postRouter = express.Router();

postRouter.get("/", postController.getPosts);

postRouter.get("/:id", postController.getPostById)

postRouter.post("/create", postController.createPost);

module.exports = postRouter;