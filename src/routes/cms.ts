import { Router } from "express";

import { cmsControllers } from "../controllers";

const router = Router();

router.get("/:apiKey/posts/:filter", cmsControllers.getPosts);

router.post("/:apiKey/user/auth/login", cmsControllers.login);

router.post("/:apiKey/user/auth/register", cmsControllers.register);

export default router;