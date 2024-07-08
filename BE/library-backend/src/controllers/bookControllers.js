const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    ISBN: req.body.ISBN,
    quantity: req.body.quantity,
    price: req.body.price
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllBooks,
  addBook,
};
































// const Book = require('../models/book');
// const xlsx = require('xlsx');

// const getAllBooks = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const addBook = async (req, res) => {
//   const { title, author, ISBN, quantity, price } = req.body;

//   const book = new Book({
//     title,
//     author,
//     ISBN,
//     quantity,
//     price,
//   });

//   try {
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// const addBooksFromExcel = async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     // Read the uploaded Excel file
//     const workbook = xlsx.readFile(file.path);
//     const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
//     const sheet = workbook.Sheets[sheetName];
//     const data = xlsx.utils.sheet_to_json(sheet);

//     // Process 'data' to add books
//     for (let i = 0; i < data.length; i++) {
//       const bookData = data[i];

//       // Create a new Book object from Excel data
//       const book = new Book({
//         title: bookData.title,
//         author: bookData.author,
//         ISBN: bookData.ISBN,
//         quantity: bookData.quantity,
//         price: bookData.price,
//       });

//       // Save the book to the database
//       await book.save();
//     }

//     res.status(201).json({ message: 'Books added successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = {
//   getAllBooks,
//   addBook,
//   addBooksFromExcel,
// };

