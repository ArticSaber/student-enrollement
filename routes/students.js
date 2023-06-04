import express from "express";
const router = express.Router();
import {
  getAllStudents,
  createNewStudent,
  updateStudent,
  getStudentById,
  deleteStudent,
  getStudent,
} from "../controllers/students";

router.route("/").get(getAllStudents).post(createNewStudent);

router
  .route("/:id")
  .get(getStudent, getStudentById)
  .patch(getStudent, updateStudent)
  .delete(getStudent, deleteStudent);

module.exports = router;
