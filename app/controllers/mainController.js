const dataMapper = require("../dataMapper");

const mainController = {


  homePage: async (request, response) => {
    try {
      const cards = await dataMapper.getAllCards();
      response.render("cardList", { cards, title : "Listes des Cartes"});
    } catch (error) {
      response.status(500).render("500", { error });
    }
  },



  cardPage: async (request, response, next) => {
    try {
      const cardId = request.params.id;
      if (isNaN(cardId)) { next(); return; } // Si ce n'est pas un nombre, on returne la 404 // Gestion de l'erreur

      const card = await dataMapper.getCard(cardId);
      if (! card) { // Si la figurine demandée n'existe pas
        next(); // on délègue la responsabilité au middleware suivant
        return; // il faut un return (ou un else), sinon on va avoir le render du 'next' et celui de mon controlleur
      }
      response.render("cardPage", { card , title : "Ma Carte"}); // on render la page de la figurine vu qu'elle existe
    } catch (error) {
      response.status(500).render("500", { error });
    }

  }


};

module.exports = mainController;
