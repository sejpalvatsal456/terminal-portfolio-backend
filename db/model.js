import { model, Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: String,
  desc: String,
  link: String
}, { timestamps: true });

export const Project = model("Project", ProjectSchema);