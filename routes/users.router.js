const { Router } = require("express");
const users = require("../controllers/users.controller");

const router = Router();

router.get("/", users.getAllUsers);
router.get("/mail/:id", users.getUserByMail);
router.get("/user/:id", users.getUserByUsername);
router.get("/mail/registra/:id", users.registerUser);
router.get("/registra/puntosAcumulados/:id", users.setPoints);
router.get("/registra/ODS/:id", users.setODS);


module.exports = router;
