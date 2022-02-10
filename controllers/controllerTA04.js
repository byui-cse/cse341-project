exports.getIndex = (req, res, next) => {
  if (req.session.style == undefined) {
    req.session.style = true;
  } 

  if (req.session.counter == undefined) {
    req.session.counter = 0;
  }

  res.render("pages/ta04", {
    title: "Team Activity 04",
    path: "/ta04", // For pug, EJS
    lightMode: req.session.style,
    counter: req.session.counter,
  });
};

exports.changeStyle = (req, res, next) => {
  req.session.style = !req.session.style
  res.redirect("/ta04");
};

exports.incCounter = (req, res, next) => {
  req.session.counter += 1;
  res.redirect("/ta04");
}

exports.decCounter = (req, res, next) => {
  req.session.counter -= 1;
  res.redirect("/ta04");
}

exports.resetSession = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/ta04");
  });
}
