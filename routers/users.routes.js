import express from "express";
import jwt from "jsonwebtoken";
import { addUserToDB, checkUser } from "../services/users.service.js";

const router = express.Router();
router.post("/login", async (req, res) => {
  try {
    
  // Get All The Data
  const email = req.body.email;
  const password = req.body.password;

  const result = await checkUser(email, password);
  if (result.status == "failed") {
    res.send(result);
  }

  const user = result["data"];
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.send({
    "status": "success",
    "data": {
        token: accessToken
    }
  });
  } catch (error) {
    res.status(400).send({
      "status": "failed",
      "message": error.message
    });
  }
});

// User Register    
router.post("/register", async (req, res) => {
  try {
    
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // TODO: Check the user email if already exist or not

  const resultInsert = await addUserToDB(name, email, password);
  if (resultInsert.status == "failed") {
    res.send(resultInsert);
  }

  const user = { id: resultInsert["id"], name: name, email: email };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  const result = {
    status: "success",
    data: {
      id: resultInsert["id"],
      token: accessToken,
    },
  };

  res.send(result);
  } catch (error) {
    res.status(400).send({
      "status": "failed",
      "message": error.message
    });
  }
});

router.get("/", (req, res) => {
  res.send(`Hello ${req.user.name}`);
});

export default router;
