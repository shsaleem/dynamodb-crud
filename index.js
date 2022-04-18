const express = require("express");
const app = express();

const charactersRoutes = require("./routes/characters");

app.use(express.json());
app.use("/characters", charactersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
