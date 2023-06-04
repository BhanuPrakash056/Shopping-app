import express from "express";
import cors from "cors";
import router from "router";
import mongoose from "mongoose";
const url = "mongodb+srv://bhanu:w5MrNXOh9vhrpl8s@cluster0.11tn785.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(url, {
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
let PORT = 3000;
app.listen(PORT, () => console.log(`server started  ${PORT}!`));
