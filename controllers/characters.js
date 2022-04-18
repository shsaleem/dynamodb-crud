const {
  addOrUpdateCharacter,
  getCharacters,
  deleteCharacter,
  getCharacterById,
} = require("../dynamo");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await getCharacters();
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getSingleCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharacterById(id);
    res.status(200).json(character);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addUpdateCharacter = async (req, res) => {
  const character = req.body;
  try {
    const newCharacter = await addOrUpdateCharacter(character);
    res.status(201).json({
      message: "Character created successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateCharacter = async (req, res) => {
  const character = req.body;
  const { id } = req.params;
  character.id = id;
  try {
    const newCharacter = await addOrUpdateCharacter(character);
    res.status(200).json({
      message: "Character updated",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteSingleCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCharacter(id);
    res.status(200).json({
      message: "Character deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllCharacters,
  getSingleCharacter,
  addUpdateCharacter,
  updateCharacter,
  deleteSingleCharacter,
};
