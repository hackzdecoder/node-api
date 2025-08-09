import express from "express";
const router = express.Router();

// Enable middleware this for the requirements of authentication
// import middleware from "@config/middleware";

router.get('/test', (request, response) => {
    response.json({ message: "API route is working!" });
});

export default router;