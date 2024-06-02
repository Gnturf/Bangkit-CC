import express from "express";
import usersRoutes from "./routers/users.routes.js";
import dotenv from "dotenv";
import { checkAuthToken } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json());

app.use(checkAuthToken);

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server was running at http://localhost:${PORT}`);
});
