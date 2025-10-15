import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";
export async function postController(req: Request, res: Response) {
  const entryData = await getAllBlogEntries();
  const postTimestamp = parseInt(req.params.createdAt);
  const post = entryData.find((entry) => entry.createdAt === postTimestamp);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("pages/post.html", {
    title: post.title || "Blog Post",
    post,
  });
}
