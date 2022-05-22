const Jobs = require('../models/Jobs');

//@desc     Get all jobs
//@route    GET /api/v1/job
//@access   Public
exports.getJobs = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: 'Show all jobs' });
}

//@desc     Get single job
//@route    GET /api/v1/job/:id
//@access   Public
exports.getJob = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Show job ${req.params.id}` });
}

//@desc     Create new job
//@route    POST /api/v1/job/
//@access   Private
exports.createJobs = (req, res, next) => {
    console.log(req.body);
    res
    .status(200)
    .json({success: true, msg: 'Create new job' });
}

//@desc     Update  job
//@route    PUT /api/v1/job/:id
//@access   Private
exports.updateJob = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Update job ${req.params.id}` });
}

//@desc     Delete job
//@route    DELETE /api/v1/job/:id
//@access   Private
exports.deleteJob = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Delete job ${req.params.id}` });
}