const router = require("express").Router();
const User = require("../models/user");
const Comment = require("../models/comment");
const Playlist = require("../models/Playlist");
const { requireLogin, isLoggedIn } = require("../middleware/auth");

router.post("/auth/profile", requireLogin, isLoggedIn, async (req, res) => {
  User.findById(req.params.id).then((foundUser) => {
    if (!foundUser)
      return res.status(404).json({ message: "No user found" });
    foundUser.comment.push(req.body);
    foundUser.save();
    return res.status(201).json({
      message: "Successfully made comment",
      data: foundUser.comment,
    });
  });
  try {
  } catch (err) {
    console.log(err);
  }
});

router.put("/auth", requireLogin, isLoggedIn, async (req, res) => {
  Comment.findById(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedComment) => {
      console.log(updatedComment);
      if (err) console.log("Error in updating comment", err);
      return res.status(202).json({
        message: "Successfully updated comment",
        data: updatedComment,
      });
    }
  );
});

router.delete("/auth", requireLogin, isLoggedIn, async (req, res) => {
  Comment.findById(req.params.id).then((foundComment) => {
      console.log(foundComment);
    if (!foundComment)
    return console.log("Error in deleting comment");
    const commentById = foundComment.comment._id(req.params.comment_id);
    console.log(commentById);
    commentById.remove();
    foundComment.save();
    return res.status(200).json({
      message: "Successfully deleted comment",
      data: commentById,
    });
  });
});

router.get("/auth", requireLogin, isLoggedIn, async (req, res) => {
    console.log("ALL COMMENTS", req.user);
    Comment.find()
    .populate('user')
    .exec((err, populatedComments) => {
        return res.status(200).json({
            message: "Success",
            data: populatedComments,
        })
    })
})

module.exports = router;