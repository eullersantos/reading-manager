import "reflect-metadata";

import express from "express";

import "./database";
import { readingRoutes } from "./routes/Reading.routes";

const server = express();

server.use(express.json());
server.use(readingRoutes);

server.listen(3535, () => {
  console.log(`
    ✅ - Server is running! 
  `);
});
