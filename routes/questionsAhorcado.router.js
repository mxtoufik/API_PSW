const { Router } = require("express");
const preguntas = require("../controllers/questionsAhorcado.controller");

const router = Router();

router.get("/", preguntas.getAllQuestions);
router.get("/dificultad/:dif", preguntas.getQuestionByDifficulty);
router.get("/puntos/:point", preguntas.getQuestionByPoints);

router.get("/id/:id", preguntas.getQuestionById);
router.get("/id/list/:ids", preguntas.getQuestionsByIds);

module.exports = router;