import express from "express";
import cors from "cors";
import router from "./router/router.js";
import mongoose from "mongoose";
import {PORT,DB_ACCESS} from "../backend/config/config.js"
  
mongoose
  .connect(DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connection established");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`server started  ${PORT}!`));
