const Job = require("../models/jobModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const getJobs = asyncHandler(async (req, res) => {
  // const getJobs =
  // router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const postJobs = asyncHandler(async (req, res) => {
  // router.post("/postjob", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("job posted successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = { getJobs, postJobs };
// module.exports = router;
