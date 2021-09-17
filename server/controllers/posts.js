const Post = require("../models/Post");
const mongoose = require("mongoose");

// Index - GET - Presentational (all of a resource)
const index = (req, res) => {
  Post.find({})
    .populate("post")
    .exec((err, populatedPosts) => {
      return res.status(200).json({
        message: "Success",
        data: populatedPosts,
      });
    });
  }

  


const create = (req, res) => {
  console.log("Post Create");
  try {
    req.body.post = mongoose.Types.ObjectId(req.body.post);
    const testPost = { comment: req.body.Post }
    Post.create(testPost, (err, savedPost) => {
      console.log("Post", savedPost);
      savedPost.populate("Post");
      console.log(savedPost, "SAVED POST IN CREATE POST");
      if (err) return console.log("Error in Posts#create:", err);
      return res.status(201).json({
        message: "Success",
        data: savedPost,
      });
    });
  } catch (error) {
    console.log("Error in Posts", error)
  }
};

module.exports = {
  index,
  create,
};
