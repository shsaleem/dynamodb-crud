const {
  addOrUpdateCharacter,
  getCharacters,
  deleteCharacter,
  getCharacterById,
} = require("../dynamo");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await getCharacters();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

const getSingleCharacter = async (req, res) => {
  const id = req.params.id;
  try {
    const character = await getCharacterById(id);
    res.json(character);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

const addUpdateCharacter = async (req, res) => {
  const character = req.body;
  try {
    const newCharacter = await addOrUpdateCharacter(character);
    res.json(newCharacter);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

const updateCharacter = async (req, res) => {
  const character = req.body;
  const { id } = req.params;
  character.id = id;
  try {
    const newCharacter = await addOrUpdateCharacter(character);
    res.json(newCharacter);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

const deleteSingleCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteCharacter(id));
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

module.exports = {
  getAllCharacters,
  getSingleCharacter,
  addUpdateCharacter,
  updateCharacter,
  deleteSingleCharacter,
};
