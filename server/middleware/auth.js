const jwt = require('jsonwebtoken');

//auth middle 
exports.requireLogin = (req, res, next) => {
    try {
        if(req.headers.authorization) {
            console.log(req.headers);
            const token = req.headers.authorization.split(' ')[1];
            //verify token
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            //attach token to session
            req.user = decode;
            next();
        } else {
            return res.status(400).json({message: 'Unauthorized'});
        }
    } catch (error) {
        console.error('something went wrong');
    }
}

exports.isLoggedIn = (req, res, next) => {
    try {
        if (req.user) {
            console.log(req.user);
            res.status(200).json({user: req.user});
            next()
        } else {
            return res.status(400).json({message: 'Not logged in'});
        }
    } catch (err) {
        console.error('something went wrong');
    }
}