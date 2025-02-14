import { Router } from "express";
import studentsController from "../../controller/student/index.js";
const studentRouter = Router();

studentRouter.get("/students", studentsController.getAll);
studentRouter.get("/student/:id", studentsController.getSingle);
studentRouter.put("/student/:id", studentsController.update);
studentRouter.post("/student", studentsController.post);
studentRouter.delete("/student/:id", studentsController.delete);

export default studentRouter;
