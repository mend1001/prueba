import { Router } from "express";
import {
  createPower,
  deletePower,
  getPower,
  getPowers,
  updatePower
} from "../controllers/power.controller.js";

const router = Router();

// GET all Powers
router.get("/power", getPowers);

// GET An Power
router.get("/power/:podid", getPower);

// DELETE An Power
router.delete("/power/:podid", deletePower);

// INSERT An Power
router.post("/power", createPower);

// UPDATE An Power
router.patch("/power/:podid", updatePower);



export default router;
