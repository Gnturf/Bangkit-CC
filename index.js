import express from "express";
import usersRoutes from "./routers/users.routes.js";
import dotenv from "dotenv";
import { checkAuthToken } from "./middlewares/auth.middleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(checkAuthToken);

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server was running at http://localhost:${PORT}`);
});
