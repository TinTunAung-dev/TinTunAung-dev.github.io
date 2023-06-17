const express = require('express');

const bookController = require("../controllers/bookController");

const router = express.Router();

router.post("/", bookController.save);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.delete("/:id", bookController.deleteBook);
router.put("/:id", bookController.updateBook);

module.exports = router;