const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render("search");
  },




  getAllElement: async (request, response, next) => {
    try {
      const element = request.query.element;
      if (element === "null") {
        const elementNull = await dataMapper.getElementNull();
        response.render("cardList", { cards : elementNull });
      }

      const elements = await dataMapper.getElement(element);

      if (! elements) {
        next(); // on délègue la responsabilité au middleware suivant
        return; // il faut un return (ou un else), sinon on va avoir le render du 'next' et celui de mon controlleur
      }
      response.render("cardList", { cards : elements, title : "Carte par Element" }); // on render la page de la figurine vu qu'elle existe
    } catch (error) {
      response.status(500).render("500", { error });
    }

  },

  getAllLevel: async (request, response, next) => {
    try {
      const level = request.query.level;
      const levels = await dataMapper.getlevel(level);

      if (! levels) {
        next(); // on délègue la responsabilité au middleware suivant
        return; // il faut un return (ou un else), sinon on va avoir le render du 'next' et celui de mon controlleur
      }
      response.render("cardList", { cards : levels, title : "Carte par Level" }); // on render la page de la figurine vu qu'elle existe
    } catch (error) {
      response.status(500).render("500", { error });
    }

  },

  getAllName: async (request, response, next) => {
    try {
      const name = request.query.name;
      const names = await dataMapper.getName(name);

      if (! names) {
        next(); // on délègue la responsabilité au middleware suivant
        return; // il faut un return (ou un else), sinon on va avoir le render du 'next' et celui de mon controlleur
      }
      response.render("cardList", { cards : names, title : "Carte par Nom" }); // on render la page de la figurine vu qu'elle existe
    } catch (error) {
      response.status(500).render("500", { error });
    }
  }

};





module.exports = searchController;