import { Router } from "express";
import cors from "cors";

import { cmsControllers } from "../controllers";

const router = Router();

router.get("/:apiKey/posts/:filter", cors(), cmsControllers.getPosts);

export default router;