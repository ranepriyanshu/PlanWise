import { Router } from "express";
import {getTasks} from "../controllers/taskControllers";

const router = Router();

router.get("/", getTasks);


export default router;