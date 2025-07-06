const Bid = require('../models/Bid');

// ✅ Developer places a bid
const placeBid = async (req, res) => {
  const { projectId, bidAmount, message } = req.body;

  try {
    const bid = await Bid.create({
      projectId,
      developerId: req.user.id,
      bidAmount,
      message
    });

    res.status(201).json({ msg: 'Bid placed successfully', bid });
  } catch (err) {
    console.error("🔥 Error placing bid:", err);
    res.status(500).json({ msg: 'Error placing bid' });
  }
};

// ✅ BONUS: Get all bids for a project
const getBidsForProject = async (req, res) => {
  const { id } = req.params;

  try {
    const bids = await Bid.find({ projectId: id }).populate('developerId', 'name email');
    res.status(200).json({ bids });
  } catch (err) {
    console.error("🔥 Error fetching bids:", err);
    res.status(500).json({ msg: 'Error getting bids' });
  }
};

// ✅ Export both functions
module.exports = {
  placeBid,
  getBidsForProject
};
