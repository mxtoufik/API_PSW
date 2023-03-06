const { Router } = require("express");
const participantes = require("../controllers/participantes.controller");

const router = Router();

router.get("/", participantes.getParticipantes);
router.get("/:usuario", participantes.getParticipante);

module.exports = router;
