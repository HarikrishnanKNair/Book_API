const mongoose = require ("mongoose");

//Creating a Book Schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    authors: [Number],
    language: String,
    pubDate: String,
    numOfPage: Number,
    category: [String],
    publication: Number,
});

//Create a Book Model
const BookModel = mongoose.model("books",BookSchema);

module.exports = BookModel;