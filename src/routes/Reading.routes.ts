import { Router } from "express";

import { ReadingController } from "../application/controller/ReadingController";

const readingRoutes = Router();

const readingController = new ReadingController();

readingRoutes.get("/readings", (request, response) => {
  return readingController.getAll(request, response);
});

export { readingRoutes };
