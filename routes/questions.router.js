const { Router } = require("express");
const preguntas = require("../controllers/questions.controller");
const respuestas = require("../controllers/answers.controller");

const router = Router();

router.get("/", preguntas.getAllQuestions);
router.get("/dificultad/:dif", preguntas.getQuestionByDifficulty);
router.get("/puntos/:point", preguntas.getQuestionByPoints);

router.get("/id/:id", preguntas.getQuestionById);
router.get("/id/:id/respuestas", respuestas.getAnswersOfQuestion);

module.exports = router;
