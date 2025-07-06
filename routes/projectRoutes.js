const express = require('express');
const router = express.Router();
const { createProject, getOpenProjects, exportProjects } = require('../controllers/projectController');
const auth = require('../middleware/auth');

// ✅ Only users can create projects
router.post('/create', auth(['user']), createProject);

// ✅ Developers can view open projects
router.get('/open', auth(['developer']), getOpenProjects);

// ✅ Users or developers can export all projects to .json
router.get('/export', auth(['user', 'developer']), exportProjects);

module.exports = router;
