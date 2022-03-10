const express = require("express");
const { getJobs, postJobs } = require("../controllers/jobControllers");
const { protect } = require("../models/middlewares/authMiddleware");
const router = express.Router();

router.route("/getalljobs").get(getJobs);
router.route("/postjob").post(protect, postJobs);

module.exports = router;
