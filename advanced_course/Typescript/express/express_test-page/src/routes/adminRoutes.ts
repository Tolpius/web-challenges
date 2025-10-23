import express from "express";
import { adminController } from "../controllers/admin/adminController";

const router = express.Router();

router
.get("/", adminController)

export default router