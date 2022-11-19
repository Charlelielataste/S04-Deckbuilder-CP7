const client = require("./database");

async function getAllCards() {
  const result = await client.query("SELECT * FROM card");
  const cards = result.rows;
  return cards;
}


async function getCard(id) { // retrouver et renvoyer une card par son id
  try {
    const result = await client.query("SELECT * FROM card WHERE id = $1", [id]);
    const card = result.rows[0];
    return card;
  } catch (error) {
    throw new Error("Une erreur a lieu au niveau de la base de données");
  }
}

async function getElement(element) { // retrouver et renvoyer une card par son id
  try {
    const result = await client.query("SELECT * FROM card WHERE card.element = $1", [element]);
    const elements = result.rows;
    return elements;
  } catch (error) {
    throw new Error("Une erreur a lieu au niveau de la base de données");
  }
}

async function getElementNull() { // retrouver et renvoyer une card par son id
  try {
    const result = await client.query("SELECT * FROM card WHERE card.element IS NULL");
    const elementNull = result.rows;
    return elementNull;
  } catch (error) {
    throw new Error("Une erreur a lieu au niveau de la base de données");
  }
}

async function getlevel(level) { // retrouver et renvoyer une card par son id
  try {
    const result = await client.query("SELECT * FROM card WHERE card.level = $1", [level]);
    const levels = result.rows;
    return levels;
  } catch (error) {
    throw new Error("Une erreur a lieu au niveau de la base de données");
  }
}

async function getName(name) { // retrouver et renvoyer une card par son id
  try {
    const result = await client.query("SELECT * FROM card WHERE card.name ILIKE $1", [`%${name}%`]);
    const names = result.rows;
    return names;
  } catch (error) {
    throw new Error("Une erreur a lieu au niveau de la base de données");
  }
}





module.exports = {
  getAllCards,
  getCard,
  getElement,
  getElementNull,
  getlevel,
  getName
};

