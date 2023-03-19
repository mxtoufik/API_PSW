const { Router } = require("express");
const preguntas = require("../controllers/questions.controller");
const respuestas = require("../controllers/answers.controller");

const router = Router();

router.get("/", preguntas.getQuestions);
router.get("/:id", preguntas.getQuestion1);
router.get("/:id/answers", respuestas.getAnswer1);

module.exports = router;
