const express = require('express');
const {
    getJobs,
    getJob,
    createJobs,
    updateJob,
    deleteJob
} = require('../controllers/jobsController');

const router = express.Router();

router
    .route('/')
    .get(getJobs)
    .post(createJobs);
router
    .route('/:id')
    .get(getJob)
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;