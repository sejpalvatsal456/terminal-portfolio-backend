import e, { Router } from "express";
import { getAllProjects, insertProject } from "../controllers/projectControllers.js";

const router = Router();

router.get('/', getAllProjects);
router.post('/', insertProject);

export default router;