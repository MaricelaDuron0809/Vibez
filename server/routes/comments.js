const router = require("express").Router();
const User = require("../models/user");
const Comment = require("../models/comment");
const Playlist = require("../models/Playlist");
const { requireLogin } = require("../middleware/auth");

router.post("/auth", requireLogin, isLoggedIn, async (req, res) => {
  Playlist.findById(req.params.id).then((foundPlaylist) => {
    if (!foundPlaylist)
      return res.status(404).json({ message: "Playlist not found" });
    foundPlaylist.comment.push(req.body);
    foundPlaylist.save();
    return res.status(201).json({
      message: "Successfully made comment",
      data: foundPlaylist.comment,
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
