//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let userList = [];

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userList
    });
});

router.post('/addUser', (req, res, next) => {
    userList.push({ name: req.body.userName });
    res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
    userList = userList.filter((user) => user.name != req.body.remove);
    res.redirect('/ta02');
});


module.exports = router;