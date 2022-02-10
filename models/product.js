const fetch = require('node-fetch');

module.exports = class Product {
  constructor(tags, imageUrl, price, name, desc) {
    this.tags = tags;
    this.imageUrl = imageUrl;
    this.price = price;
    this.name = name;
    this.desc = desc;
  }

  static fetchall(cb) {
    fetch("https://byui-cse.github.io/cse341-course/lesson03/items.json")
    .then(response => response.json())
    .then(jsonObj => {
      // console.log(jsonObj);
      cb(jsonObj);
    });
  };

  static search(query, cb) {
    query = query.toLowerCase();

    this.fetchall((products) => {
      const filteredProducts = products.filter((prod) => {
        const inName = prod.name.toLowerCase().includes(query);
        const inDesc = prod.description.toLowerCase().includes(query);

        let inTags = false;
        for (let tag of prod.tags) {
          if (tag.toLowerCase().includes(query)) {
            inTags = true;
          };
        };

        return (inName || inTags || inDesc);
      });

      cb(filteredProducts);
    });
  };
};