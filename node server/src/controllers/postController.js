const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPosts = async (req, res) => {
  await prisma.post
    .findMany()
    .then((posts) => {
      res.send(posts);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Failed to fetch posts.");
    });
  res.end;
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  await prisma.post
    .findUnique({ where: { id: +id } })
    .then((post) => res.send(post));
  res.end;
};

exports.deletePostById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await prisma.post.delete({ where: { id: +id } });
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: deletedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to delete post." });
  }
};

exports.createPost = async (req, res) => {
  const { title, message } = req.body;

  await prisma.post
    .create({ data: { title, message } })
    .then((createdPost) => res.status(200).send(createdPost))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Failed to create post.");
    });
  res.end;
};

exports.patchPostById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, message } = req.body;

  try {
    let updatedPost;

    if (title && message) {
      updatedPost = await prisma.post.update({
        where: { id: id },
        data: { title, message },
      });
    } else if (title) {
      updatedPost = await prisma.post.update({
        where: { id: id },
        data: { title },
      });
    } else if (message) {
      updatedPost = await prisma.post.update({
        where: { id: id },
        data: { message },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "No fields to update." });
    }

    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to update post." });
  }
};

exports.searchPosts = async (req, res) => {
  try {
    const { id, message, title } = req.query;

    const posts = await prisma.post.findMany({
      where: {
        AND: [
          id ? { id: parseInt(id) } : undefined,
          message
            ? { message: { contains: message, mode: "insensitive" } }
            : undefined,
          title
            ? { title: { contains: title, mode: "insensitive" } }
            : undefined,
        ],
      },
    });

    res.json(posts);
  } catch (error) {
    console.error("Error searching posts:", error);
    res.status(500).json({ error: "An error occurred while searching posts." });
  }
};
