import "dotenv/config";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import nunjucks from "nunjucks";
import entryData from "./data/entries.json";
import { logger } from "./middlewares/loggerMiddleware";
import { aboutController } from "./controllers/aboutController";
import { homeController } from "./controllers/homeController";
import { postController } from "./controllers/postController";
import { contactController } from "./controllers/contactController";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(cors());

app.use(express.static("public"));

const nunEnv = nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});
// Filter -Datum-Formatierung
nunEnv.addFilter("formatDate", function (timestamp: number) {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

app.get("/", homeController)
.get("/contact", contactController)
.get("/about", aboutController)
.get("/post/:createdAt", postController);

app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});
