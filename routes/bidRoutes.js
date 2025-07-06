const express = require('express');
const router = express.Router();
const { placeBid, getBidsForProject } = require('../controllers/bidController');
const auth = require('../middleware/auth');

// ✅ Developer places a bid
router.post('/place', auth(['developer']), placeBid);

// ✅ BONUS: View bids on a project
router.get('/project/:id', auth(['user', 'developer']), getBidsForProject);

module.exports = router;
