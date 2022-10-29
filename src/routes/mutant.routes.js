import { Router } from "express";
import {
  createMutant,
  deleteMutant,
  getMutant,
  getMutants,
  updateMutant,
  survivedMutant,
  deadMutant
} from "../controllers/mutant.controller.js";
const router = Router();

// GET all Mutants
router.get("/mutant", getMutants);

// GET An Mutant
router.get("/mutant/:mutid", getMutant);

// DELETE An Mutant
router.delete("/mutant/:mutid", deleteMutant);

// INSERT An Mutant
router.post("/mutant", createMutant);

// UPDATE An Mutant
router.patch("/mutant/:mutid", updateMutant);

// Survived An Mutant
router.delete("/mutant/survived/:mutid", survivedMutant);

// Survived An Mutant
router.delete("/mutant/dead/:mutid", deadMutant);


export default router;
