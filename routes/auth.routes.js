const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', 
    passport.authenticate('google', { scope: ['email', 'profile' ] }));

router.get('/google/callback', passport.authenticate('google', { failureRedeirect: '/user/no-permission' }),
    (req, res) => {
        res.redirect('/user/logged');
    }
);

module.exports = router; 

