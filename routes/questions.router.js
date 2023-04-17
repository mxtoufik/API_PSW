const { Router } = require("express");
const preguntas = require("../controllers/questions.controller");
const respuestas = require("../controllers/answers.controller");

const router = Router();

router.get("/", preguntas.getAllQuestions);
router.get("/dificultad/:dif", preguntas.getQuestionByDifficulty);
router.get("/dificultad/:dif/count", preguntas.getCountOfDifficulty);
router.get("/dificultad/:dif/id", preguntas.getIdOfDifficulty);
router.get("/puntos/:point", preguntas.getQuestionByPoints);

router.get("/id/:id", preguntas.getQuestionById);
router.get("/id/list/:ids", preguntas.getQuestionsByIds);
router.get("/id/:id/respuestas", respuestas.getAnswersOfQuestion);
router.get("/id/:id/respuestaCorrecta", respuestas.getCorrectAnswer);

module.exports = router;
