const Applications = require('../models/Applications');

//@desc     Get all applications
//@route    GET /api/v1/application
//@access   Public
exports.getApplications = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: 'Show all applications' });
}

//@desc     Get single application
//@route    GET /api/v1/application/:id
//@access   Public
exports.getApplication = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Show application ${req.params.id}` });
}

//@desc     Create new application
//@route    POST /api/v1/application/
//@access   Private
exports.createApplications = (req, res, next) => {
    console.log(req.body);
    res
    .status(200)
    .json({success: true, msg: 'Create new application' });
}

//@desc     Update  application
//@route    PUT /api/v1/application/:id
//@access   Private
exports.updateApplication = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Update application ${req.params.id}` });
}

//@desc     Delete application
//@route    DELETE /api/v1/application/:id
//@access   Private
exports.deleteApplication = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Delete application ${req.params.id}` });
}