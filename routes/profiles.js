const express = require('express');
const {
    getProfiles,
    getProfile,
    createProfiles,
    updateProfile,
    deleteProfile
} = require('../controllers/profileController');

const router = express.Router();

router
    .route('/')
    .get(getProfiles)
    .post(createProfiles);
router
    .route('/:id')
    .get(getProfile)
    .put(updateProfile)
    .delete(deleteProfile);

module.exports = router;