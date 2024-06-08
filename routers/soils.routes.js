import express from "express";
import { getAllSoils, getSoilById } from "../controllers/soils.controller.js";

const router = express.Router();
router.get("/", getAllSoils);
router.get("/:id", getSoilById);

export default router;