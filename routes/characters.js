const express = require("express");
const router = express.Router();

const {
  getAllCharacters,
  getSingleCharacter,
  addUpdateCharacter,
  updateCharacter,
  deleteSingleCharacter,
} = require("../controllers/characters");

router.get("/", getAllCharacters);
router.get("/:id", getSingleCharacter);
router.post("/", addUpdateCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteSingleCharacter);

module.exports = router;
