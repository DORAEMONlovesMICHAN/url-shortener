import express, { Router } from "express";
import { createShortUrl,redirectUrl,getUrlAnalytics,getOriginalUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten",createShortUrl);
// router.get("/:shortId",redirectUrl);
router.get("/analytics/:shortId", getUrlAnalytics);
router.get("/redirectUrl/:shortId",redirectUrl);
router.get("/getOriginal/:shortId", getOriginalUrl);

export default router;