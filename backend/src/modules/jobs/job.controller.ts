import { Request, Response }
from "express";

import { Job }
from "./job.model.js";

export const createJob =
async (
    req: Request,
    res: Response
) => {
    const job =
        await Job.create(
            req.body
        );

    return res.json({
        success: true,
        data: job,
    });
};

export const getJobs =
async (
    _req: Request,
    res: Response
) => {
    const jobs =
        await Job.find()
            .sort({
                createdAt: -1,
            });

    return res.json({
        success: true,
        data: jobs,
    });
};