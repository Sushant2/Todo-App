const express = require("express");
const mongoose = require("mongoose");

// process.env.MONGO_URL
mongoose.connect("mongodb://localhost:27017/openSourceTask", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const itemsSchema = {
    name: String
};

const listSchema = {
    name: String,
    items: [itemsSchema]
};


const Item = mongoose.model("Item", itemsSchema);
const List = mongoose.model("List", listSchema);

module.exports = { Item, List };