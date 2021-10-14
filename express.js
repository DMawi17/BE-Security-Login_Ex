import express from "express";
import usrRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/", usrRoutes);

export default app;
