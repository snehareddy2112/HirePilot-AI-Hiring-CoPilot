import { Router }
from "express";

import {
    createJob,
    getJobs,
} from "./job.controller.js";

const router =
    Router();

router.post(
    "/",
    createJob
);

router.get(
    "/",
    getJobs
);

export default router;