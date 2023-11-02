const routes = require("express").Router();
const { findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku } = require("../controllers/BookController");
const { findAllUser, detailUser, tambahUser, hapusUser, updateUser } = require("../controllers/UserController");

//endpoint buku
routes.get("/books", findAllBooks);
routes.get("/findbook", detailBook);
routes.post("/book", tambahBuku);
routes.delete("/book", hapusBuku);
routes.put("/book", updateBuku)

//endpoint user
routes.get("/user", findAllUser);
routes.get("/user:id", detailUser);
routes.post("/user", tambahUser);
routes.delete("/user", hapusUser);
routes.put("/user", updateUser)

module.exports= routes;

