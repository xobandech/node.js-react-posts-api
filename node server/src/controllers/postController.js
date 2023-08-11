const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts." });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({ where: { id: +id } });
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch post." });
  } finally {
    await prisma.$disconnect();
  }
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
  } finally {
    await prisma.$disconnect();
  }
};

exports.createPost = async (req, res) => {
  let { title, message } = req.body;

  if (req.query.title && req.query.message) {
    title = req.query.title;
    message = req.query.message;
  }

  try {
    const createdPost = await prisma.post.create({ data: { title, message } });
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create post." });
  } finally {
    await prisma.$disconnect();
  }
};

exports.patchPostById = async (req, res) => {
  const { id, title, message } = req.query;
  
  try {
    if (!id) {
      return res.status(400).json({ error: "Missing post ID." });
    }

    let updatedPost;

    if (title || message) {
      updatedPost = await prisma.post.update({
        where: { id: +id },
        data: { title, message },
      });
      res.status(200).json({ success: true, data: updatedPost });
    } else {
      res.status(400).json({ success: false, error: "No fields to update." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to update post." });
  } finally {
    await prisma.$disconnect();
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
  } finally {
    await prisma.$disconnect();
  }
};
