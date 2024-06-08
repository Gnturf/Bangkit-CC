import express from "express";
import dotenv from "dotenv";
import { checkAuthToken } from "./middlewares/auth.middleware.js";
import usersRoutes from "./routers/users.routes.js";
import soilsRoutes from "./routers/soils.routes.js";
import plantsRoutes from "./routers/plants.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/soils", soilsRoutes);
app.use("/plants", plantsRoutes);

app.listen(PORT, "0.0.0.0", 511, () => {
  console.log(`Server was running at http://localhost:${PORT}`);
});
