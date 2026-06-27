import dotenv from "dotenv";
dotenv.config();


import pool from "./config/db.js";
import app from './app.js'



const PORT = process.env.PORT || 5000;



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
