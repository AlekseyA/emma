import express from "express";
import usersRouter from "./routes/users";

const app = express();

app.use('/users', usersRouter)

export default app;
