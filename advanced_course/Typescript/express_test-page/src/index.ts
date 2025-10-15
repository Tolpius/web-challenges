import "dotenv/config";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import nunjucks from "nunjucks";
import entryData from "./data/entries.json";
import { logger } from "./middlewares/loggerMiddleware";
import { aboutController } from "./controllers/aboutController";

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

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index.html", {
    title: "Home Page",
    entryData,
  });
});

app.get("/contact", (req: Request, res: Response) => {
  res.render("pages/contact.html", {
    title: "Contact Page",
  });
});
app.get("/about", aboutController);
//routing dynamik
app.get("/post/:createdAt", (req: Request, res: Response) => {
  const postTimestamp = parseInt(req.params.createdAt);
  const post = entryData.find((entry) => entry.createdAt === postTimestamp);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("pages/post.html", {
    title: post.title || "Blog Post",
    post,
  });
});

app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});
