import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import mutantsRoutes from "./routes/mutant.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import powerRoutes from "./routes/power.routes.js";
import countryRoutes from "./routes/country.routes.js";
import cors from "cors"

const app = express();
const whiteLIst = ['http://localhost:4200','https://asdappmutantfrontendprod-production.up.railway.app']

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: whiteLIst}));
// Routes
app.use("/", indexRoutes);
app.use("/api", mutantsRoutes);
app.use("/api", vehicleRoutes);
app.use("/api", powerRoutes);
app.use("/api", countryRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
