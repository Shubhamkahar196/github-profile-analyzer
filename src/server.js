import dotenv from "dotenv";
dotenv.config();

import express from "express";
import pool from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const startServer = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL Connected Successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(` Server Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
