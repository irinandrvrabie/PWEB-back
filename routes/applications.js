const express = require('express');
const {
    getApplications,
    getApplication,
    createApplications,
    updateApplication,
    deleteApplication
} = require('../controllers/applicationController');

const router = express.Router();

router
    .route('/')
    .get(getApplications)
    .post(createApplications);
router
    .route('/:id')
    .get(getApplication)
    .put(updateApplication)
    .delete(deleteApplication);

module.exports = router;