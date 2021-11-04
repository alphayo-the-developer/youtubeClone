const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Video {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;

  }
}

module.exports = Product;