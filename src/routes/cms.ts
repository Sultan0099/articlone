import { Router } from "express";

import { cmsControllers } from "../controllers";

const router = Router();

router.get("/:apiKey/posts/:filter", cmsControllers.getPosts);

router.get("/:apiKey/single-post/:postId", cmsControllers.getSinglePost);

router.post("/:apiKey/user/auth/login", cmsControllers.login);

router.post("/:apiKey/user/auth/register", cmsControllers.register);

export default router;