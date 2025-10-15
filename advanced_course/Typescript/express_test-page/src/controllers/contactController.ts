import type { Request, Response } from "express";

export function contactController (req: Request, res: Response) {
  res.render("pages/contact.html", {
    title: "Contact Page",
  });
}