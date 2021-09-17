const router = require("express").Router();
const postCntrl = require('../controllers/posts')
const { requireLogin, isLoggedIn } = require("../middleware/auth");

router.get('/', postCntrl.index)
router.post('/', postCntrl.create)

module.exports = router


// router.put("/auth", requireLogin, isLoggedIn, async (req, res) => {
//   Comment.findById(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, updatedComment) => {
//       console.log(updatedComment);
//       if (err) console.log("Error in updating comment", err);
//       return res.status(202).json({
//         message: "Successfully updated comment",
//         data: updatedComment,
//       });
//     }
//   );
// });

// router.delete("/auth", requireLogin, isLoggedIn, async (req, res) => {
//   Comment.findById(req.params.id).then((foundComment) => {
//       console.log(foundComment);
//     if (!foundComment)
//     return console.log("Error in deleting comment");
//     const commentById = foundComment.comment._id(req.params.comment_id);
//     console.log(commentById);
//     commentById.remove();
//     foundComment.save();
//     return res.status(200).json({
//       message: "Successfully deleted comment",
//       data: commentById,
//     });
//   });
// });

// router.get("/auth", requireLogin, isLoggedIn, async (req, res) => {
//     console.log("ALL COMMENTS", req.user);
//     Comment.find()
//     .populate('user')
//     .exec((err, populatedComments) => {
//         return res.status(200).json({
//             message: "Success",
//             data: populatedComments,
//         })
//     })
// })

// module.exports = router;