import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import mutantsRoutes from "./routes/mutant.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", mutantsRoutes);
app.use("/api", vehicleRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
