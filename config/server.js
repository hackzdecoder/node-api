import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import endPoint from "@routes/api";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", endPoint);

app.listen(port, () => {
    console.log(`Server Running at port: ${port} at host http://localhost:${port}`);
});