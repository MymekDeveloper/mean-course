const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "First post",
      content: "First content",
    },
    {
      id: "2",
      title: "Second post",
      content: "Second content",
    },
  ];
  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts,
  });
});

module.exports = app;
