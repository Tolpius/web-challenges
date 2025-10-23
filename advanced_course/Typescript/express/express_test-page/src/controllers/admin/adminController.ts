import type { Request, Response } from "express";

export function adminController(req: Request, res: Response) {
  res.render("../views/admin/indexPage.html");
}
