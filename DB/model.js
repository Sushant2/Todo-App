const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin-sushant:Sushant2020@cluster0-jlkrq.mongodb.net/todolistDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const itemsSchema = {
  name: String,
};

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model('List', listSchema);
const Item = mongoose.model('Item', itemsSchema);

module.exports = {
  List,
  Item,
};
