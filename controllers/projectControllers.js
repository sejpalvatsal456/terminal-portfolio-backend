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

export const updateProject = async(req, res) => {
  const { id, name, link, desc } = req.body;
  if (id.trim() === "") {
    return res.status(500).json({ msg: "Missing id fields." });
  }
  if (name.trim() === "" || link.trim() === "" || desc.trim() === "") {
    return res.status(500).json({ msg: "Missing all fields." });
  }

  const newUpdate = await Project.findByIdAndUpdate(id, { name: name, link: link, desc: desc }, { returnDocument: 'after' });
  return res.status(200).json(newUpdate);
}

export const deleteProject = async(req, res) => {
  const { id } = req.body;
  const proj = await Project.findById(id);
  if (!proj) {
    return res.status(404).json({ msg: "There is no project with this id. " });
  }
  await Project.findByIdAndDelete(id);
  return res.status(200).json({ msg: "Successfully deleted." });
}