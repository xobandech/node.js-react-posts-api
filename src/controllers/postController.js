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
    res.end
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  await prisma.post.findUnique({ where: { id: +id } }).then((post) => res.send(post));
  res.end
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
    res.end
};
