const { response } = require("express");
const express = require("express");

// Database
const database = require("./database");

// Initialization
const booky = express();

/*
Route         /
Description   Get all Books
Access        Public
Parameter     Nil
Methods       Get
*/
booky.get("/", (req, res) => {
  return res.json({ books: database.books });
});

/*
Route         /
Description   Get specific book based on IBSN
Access        Public
Parameter     isbn
Methods       Get
*/
booky.get("/:isbn", (req, res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
  );

  if (getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for the ISBN of ${req.params.isbn}`,
    });
  }

  return res.json({ book: getSpecificBook });
});

/*
Route         /c
Description   Get specific book based on category
Access        Public
Parameter     category
Methods       Get
*/
booky.get("/c/:category", (req,res) => {
    const getSpecificBook=database.books.filter((books) => 
    book.category.includes(req.params.category)
    );
    if (getSpecificBook.length === 0) {
        return res.json({
          error: `No book found for the Category of ${req.params.category}`,
        });
      }
    
      return res.json({ book: getSpecificBook });
});

/*
Route         /author
Description   Get all authors
Access        Public
Parameter     Nil
Methods       Get
*/
booky.get("/author")

booky.listen(3000, () => console.log("HEy server is running! 😎"));
