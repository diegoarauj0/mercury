import { ShortenController } from "./controllers/shorten.controller.js";
import { container } from "tsyringe";
import { Router } from "express";
import { RedirectController } from "./controllers/redirect.controller.js";

const router = Router();

const shortenController = container.resolve(ShortenController);
const redirectController = container.resolve(RedirectController)

router.get("/r/:code", redirectController.redirect)
router.get("/", shortenController.view);
router.post("/", shortenController.shorten);

export default router;
