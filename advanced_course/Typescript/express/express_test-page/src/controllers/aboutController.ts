import type { Request, Response } from "express";
export function aboutController(req: Request, res: Response) {
  res.render("../views/pages/about.html", {
    meta: {
      title: "About me",
    },
    headerData: {
      image: "assets/img/about-bg.jpg",
      title: "About Me!",
      subTitle: "This is what I do.",
    },
  });
}
