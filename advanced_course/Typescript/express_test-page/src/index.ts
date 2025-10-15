import "dotenv/config";
import express from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import { logger } from "./middlewares/loggerMiddleware";
import publicRoutes from "./routes/publicRoutes";
import adminRoutes from "./routes/adminRoutes"

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

/** Routes **/

app
.use(publicRoutes)
.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`server is Running at http://localhost:${PORT}`);
});
