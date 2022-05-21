const Jobs = require('../models/Jobs');

//@desc     Get all companies
//@route    GET /api/v1/company
//@access   Public
exports.getCompanies = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: 'Show all companies' });
}

//@desc     Get single company
//@route    GET /api/v1/company/:id
//@access   Public
exports.getCompany = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Show company ${req.params.id}` });
}

//@desc     Create new company
//@route    POST /api/v1/company/
//@access   Private
exports.createCompanies = (req, res, next) => {
    console.log(req.body);
    res
    .status(200)
    .json({success: true, msg: 'Create new company' });
}

//@desc     Update  company
//@route    PUT /api/v1/company/:id
//@access   Private
exports.updateCompany = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Update company ${req.params.id}` });
}

//@desc     Delete company
//@route    DELETE /api/v1/company/:id
//@access   Private
exports.deleteCompany = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Delete company ${req.params.id}` });
}