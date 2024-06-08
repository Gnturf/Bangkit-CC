import express from "express";
import { getAllPlants, getPlantById } from "../controllers/plants.controller.js";

const router = express.Router();
router.get("/", getAllPlants);
router.get("/:id", getPlantById);

export default router;