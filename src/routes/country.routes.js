import { Router } from "express";
import {
  createCountry,
  deleteCountry,
  getCountry,
  getCountries,
  updateCountry
} from "../controllers/country.controller.js";

const router = Router();

// GET all Countries
router.get("/country", getCountries);

// GET An Country
router.get("/country/:paiid", getCountry);

// DELETE An Country
router.delete("/country/:paiid", deleteCountry);

// INSERT An Country
router.post("/country", createCountry);

// UPDATE An Country
router.patch("/country/:paiid", updateCountry);

export default router;
