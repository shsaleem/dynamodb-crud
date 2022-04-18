const axios = require("axios");
const { addOrUpdateCharacter } = require("../dynamo");

const url = "http://hp-api.herokuapp.com/api/characters";

const getData = async () => {
  try {
    const { data: characters } = await axios.get(url);
    const characterPromises = characters.map((character, idx) =>
      addOrUpdateCharacter({ ...character, id: idx + "" })
    );
    await Promise.all(characterPromises);
  } catch (err) {
    console.error(err);
  }
};

getData();
