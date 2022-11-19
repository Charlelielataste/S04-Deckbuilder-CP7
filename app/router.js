const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const searchController = require("./controllers/searchController");
const bookmarksController = require("./controllers/bookmarksController");


router.get("/", mainController.homePage);
router.get("/search", searchController.searchPage);
router.get("/cardpage/:id", mainController.cardPage);
router.get("/search/element", searchController.getAllElement);
router.get("/search/level", searchController.getAllLevel);
router.get("/search/name", searchController.getAllName);
// page favoris
router.get("/deck", bookmarksController.bookmarksPage );

// page add to favoris

router.get("/deck/add/:id", bookmarksController.addBookmarksPage);

// page delete to favoris

router.get("/deck/delete/:id", bookmarksController.deleteBookmarksPage);


module.exports = router;