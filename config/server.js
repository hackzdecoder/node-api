import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { paths } from "../fileMapping.js";

dotenv.config();

const endPoint = await import(`${paths.routes}/api.js`);
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", endPoint.default);

app.listen(port, () => {
    console.log(`Server Running at port: ${port} at host http://localhost:${port}`);
});
