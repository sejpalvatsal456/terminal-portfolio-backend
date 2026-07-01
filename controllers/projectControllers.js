import { Project } from "../db/model.js"

export const getAllProjects = async(req, res) => {
  const projects = await Project.find();
  return res.status(200).json(projects);
};

export const insertProject = async(req, res) => {
  const { name, link, desc } = req.body;
  if (name.trim() === "" || link.trim() === "" || desc.trim() === "") {
    return res.status(500).json({ msg: "Missing all fields." });
  }
  const newProject = await Project.insertOne({ name, link, desc });
  return res.status(200).json({ newProject });
}