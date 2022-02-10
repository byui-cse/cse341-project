const express = require('express');
const router = express.Router();

let userList = [];
let displayError = false;
let errorMessage = '';

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: userList, 
    error: {display: displayError, message: errorMessage}
  });
});

const userExists = (username) => {
  for (let user of userList) {
    if (user.name == username) {
      return true
    };
  }
  return false;
}

router.post('/addUser', (req, res, next) => {
  let username = req.body.username;
  if (userExists(username)){
    displayError = true;
    errorMessage = `'${username}' Already Exists`
    res.redirect('/ta02');
  } else {
    displayError = false;
    userList.push({name: username});
    res.redirect('/ta02');
  }
});

router.post('/removeUser', (req, res, next) => {
  let username = req.body.removeName;
  if (userExists(username)) {
    displayError = false;
    userList = userList.filter((user) => user.name != username)
    res.redirect('/ta02');
  } else {
    displayError = true;
    errorMessage = `'${username}' Does Not Exist`;
    res.redirect('/ta02');
  }
});

module.exports = router;
