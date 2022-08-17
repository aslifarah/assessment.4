const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getAllFortune } = require('./controller')

app.get("/api/fortunes", getAllFortune);

const { addFortune } = require('./controller')

app.post("/api/fortune", addFortune);

const { removeFortune } = require('./controller')

app.delete("/api/fortune/:fortuneindex", removeFortune);

const { putFortune } = require('./controller')

app.put("/api/fortune/:fortuneindex", putFortune);

app.listen(4000, () => console.log("Server running on 4000"));
