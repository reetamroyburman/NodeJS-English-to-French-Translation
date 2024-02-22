const router = require("express").Router();
const translateController = require("../controllers/translateController");

router.post("/eng-fr", translateController.engToFrController);

module.exports = router;