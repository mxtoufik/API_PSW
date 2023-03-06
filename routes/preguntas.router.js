const { Router } = require("express");
const preguntas = require("../controllers/preguntas.controller");

const router = Router();

router.get("/", preguntas.getPreguntas);
router.get("/:usuario", preguntas.getPregunta);

module.exports = router;
