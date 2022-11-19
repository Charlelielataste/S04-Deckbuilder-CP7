const dataMapper = require("../dataMapper");

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {

    const bookmarkscard = request.session.bookmarks ;
    response.render("deck", { bookmarkscard });

  },

  addBookmarksPage: async (request, response) => {
    if (request.session.bookmarks === undefined) {
      request.session.bookmarks = [];
    }
    const cardId = request.params.id;
    const findBookmark = request.session.bookmarks;
    const found = findBookmark.find(card => card.id === Number(cardId));
    if (found === undefined) {
      const card = await dataMapper.getCard(cardId);
      request.session.bookmarks.push(card);
    }
    response.redirect("/deck");
  },

  deleteBookmarksPage: async (request, response) => {
    const cardId = request.params.id;
    const findBookmark = request.session.bookmarks;
    const found = findBookmark.filter(card => card.id !== Number(cardId));
    request.session.bookmarks = found;
    response.redirect("/deck");
  }
};


module.exports = bookmarksController;