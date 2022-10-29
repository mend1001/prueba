import { Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  getVehicle,
  getVehicles,
  updateVehicle,
  survivedVehicle,
  deadVehicle
} from "../controllers/vehicle.controller.js";

const router = Router();

// GET all Vehicles
router.get("/vehicle", getVehicles);

// GET An Vehicle
router.get("/vehicle/:vehid", getVehicle);

// DELETE An Vehicle
router.delete("/vehicle/:vehid", deleteVehicle);

// INSERT An Vehicle
router.post("/vehicle", createVehicle);

// UPDATE An Vehicle
router.patch("/vehicle/:vehid", updateVehicle);

// Survived An Vehicle
router.delete("/vehicle/survived/:vehid", survivedVehicle);

// Survived An Vehicle
router.delete("/vehicle/dead/:vehid", deadVehicle);


export default router;
