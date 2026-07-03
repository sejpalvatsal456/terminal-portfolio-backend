import e, { Router } from "express";
import { deleteProject, getAllProjects, insertProject, updateProject } from "../controllers/projectControllers.js";

const router = Router();

router.get('/', getAllProjects);
router.post('/', insertProject);
router.put('/', updateProject);
router.delete('/', deleteProject);

export default router;