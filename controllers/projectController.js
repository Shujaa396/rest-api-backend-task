const fs = require('fs');
const path = require('path');
const Project = require('../models/Project');

// ✅ Create a new project (User only)
const createProject = async (req, res) => {
  const { title, description, techStack, estimatedBudget } = req.body;

  try {
    const project = await Project.create({
      title,
      description,
      techStack,
      estimatedBudget,
      userId: req.user.id,
      status: 'open'
    });

    res.status(201).json({ msg: 'Project created successfully', project });
  } catch (err) {
    console.error("🔥 Project Creation Error:", err);
    res.status(500).json({ msg: 'Error creating project', error: err.message });
  }
};

// ✅ Developer views all open projects
const getOpenProjects = async (req, res) => {
  try {
    const openProjects = await Project.find({ status: 'open' });
    res.status(200).json({ projects: openProjects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching open projects' });
  }
};

// ✅ Export all projects to JSON
const exportProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const filePath = path.join(__dirname, '..', 'exports', 'projects-export.json');

    // Ensure /exports folder exists
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath));
    }

    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));

    res.status(200).json({ msg: 'Projects exported successfully', file: 'exports/projects-export.json' });
  } catch (err) {
    console.error("🔥 Export Error:", err);
    res.status(500).json({ msg: 'Error exporting projects' });
  }
};

// ✅ Export all functions at once
module.exports = {
  createProject,
  getOpenProjects,
  exportProjects
};
