const router = require("express").Router();
const User = require("../models/user");
const Comment = require("../models/comment")
const Playlist = require("../models/Playlist")
const { requireLogin } = require("../middleware/auth");


router.post('/auth', requireLogin, isLoggedIn, async (req, res) => {
    Playlist.findById(req.params.id)
    .then((foundPlaylist) => {
        if (!foundPlaylist) return res.status(404).json({ message: "Playlist not found"});
        foundPlaylist.
    })
    try {
        
    } catch (err) {
        console.log(err)
    }
})