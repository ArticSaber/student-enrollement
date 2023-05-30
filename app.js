import Express from "express";
import mongoose from "mongoose";

const Port = 3000;
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.listen(Port, () => console.log(`Server running on ${Port}`));
app.get("/", (req, res) => res.send("Hello World!"));
