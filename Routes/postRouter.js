
const postRouter = require("express").Router();
const postController = require("../controllers/postControllers");

postRouter.get("/post", postController.getPosts)
postRouter.post("/post", postController.createPost)
postRouter.delete("/post/:id", postController.deletePost)

module.exports = postRouter;