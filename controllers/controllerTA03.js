const Product = require('../models/product.js');

exports.getProducts = (req, res, next) => {
  Product.fetchall((prodsObj) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      prodsObj: prodsObj
    });
  });
};

exports.searchProducts = (req, res, next) => {
  const query = req.body.query;
  Product.search(query, (results) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      prodsObj: results
    });
  })
}