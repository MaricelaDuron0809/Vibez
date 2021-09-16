const Comment
    
const create = (req, res) => {
  req.body.comment = mongoose.Types.ObjectId;
  req.body.comment;
  Comment.create(req.body, (err, newComment) => {
    newComment.populate("user");
    console.log(newComment, "new Comment");
    if (err) return console.log(err, "error in creating comment");
    return res.send(201).json({
      message: "Comment created successfully",
      data: newComment,
    });
  });
});
