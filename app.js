const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config("./.env");

const translateRouter = require("./routers/translation");


//middlewares
app.use(express.json({ limit: "10mb" }));


app.use("/api/translate", translateRouter);


app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
