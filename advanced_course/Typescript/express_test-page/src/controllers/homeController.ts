import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";

export async function homeController (req: Request, res: Response) {
  const entryData = await getAllBlogEntries()
  res.render("../views/pages/index.html", {
    title: "Home Page",
    entryData,
  });
}