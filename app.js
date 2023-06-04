import Express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routes/students.js";
import dotenv from "dotenv";
dotenv.config();

const Port = 3000;
const app = Express();


const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("Connection established"));

app.get("/", (request, response) => {
  response.send("Hello");
});

app.use("/api/v1/students", studentsRouter);

app.listen(Port, console.log(`listening on port http://localhost:${PORT}`));
