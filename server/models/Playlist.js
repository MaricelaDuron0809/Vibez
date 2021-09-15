const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: [
    commentSchema
]
  ,
  playlistTitle: {
    type: String,
  },
  songTitle: {
    type: String,
  },
  artistName: {
    type: String,
  },
});

module.exports = mongoose.model("Playlist", playlistSchema);
