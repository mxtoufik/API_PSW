import { Router } from "express";
import * as index from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", index.ping);

router.get("/users", index.getUsers);

export default router;
