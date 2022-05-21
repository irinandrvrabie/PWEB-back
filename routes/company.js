const express = require('express');
const {
    getCompanies, 
    getCompany, 
    createCompanies, 
    updateCompany, 
    deleteCompany
} = require('../controllers/company');

const router = express.Router();

router
    .route('/')
    .get(getCompanies)
    .post(createCompanies);
router
    .route('/:id')
    .get(getCompany)
    .put(updateCompany)
    .delete(deleteCompany);

module.exports = router;