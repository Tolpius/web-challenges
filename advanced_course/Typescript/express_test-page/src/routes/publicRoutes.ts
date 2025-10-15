import express from "express";
import { aboutController } from "../controllers/aboutController";
import { homeController } from "../controllers/homeController";
import { postController } from "../controllers/postController";
import { contactController } from "../controllers/contactController";

const router = express.Router();

router
.get("/", homeController)
.get("/contact", contactController)
.get("/about", aboutController)
.get("/post/:createdAt", postController);

export default router;