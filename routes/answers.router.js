const { Router } = require("express");
const respuestas = require("../controllers/answers.controller");

const router = Router();

router.get("/:id", respuestas.getAnswersOfQuestion);


module.exports = router;


