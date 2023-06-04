import mongoose from "mongoose";

export const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enrolledDepartment: {
    type: String,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now(),
  },
});
