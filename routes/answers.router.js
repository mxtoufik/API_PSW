const { Router } = require("express");
const respuestas = require("../controllers/answers.controller");

const router = Router();

router.get("/:user", respuestas.getAnswer1);

module.exports = router;

