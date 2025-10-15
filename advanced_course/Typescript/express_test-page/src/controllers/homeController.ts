import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";

export async function homeController (req: Request, res: Response) {
  res.render("../views/pages/index.html", {
    title: "Home Page",
    entryData: await getAllBlogEntries(),
  });
}