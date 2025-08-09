import Project from "../models/Project.js";

// @desc Create project
export const createProject = async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    user: req.user.id,
  });
  res.status(201).json(project);
};

// @desc Get user projects
export const getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
};

// @desc Update project
export const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  if (project.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// @desc Delete project
export const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  if (project.user.toString() !== req.user.id)
    return res.status(401).json({ message: "Not authorized" });

  await project.deleteOne();
  res.json({ message: "Project removed" });
};
