import { Router } from "express";
import cors from "cors";

import { cmsControllers } from "../controllers";

const router = Router();

router.get("/:apiKey/posts/:filter", cors(), cmsControllers.getPosts);

router.post("/:apiKey/user/auth/login", cors(), cmsControllers.login);

router.post("/:apiKey/user/auth/register", cors(), cmsControllers.register);

export default router;