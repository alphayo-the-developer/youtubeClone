const express = require("express");

const router = express.Router();


const channelsController = require('../controllers/channel');


router.get("/", channelsController.getIndex );
router.get("/upload", channelsController.uploadVideos );
router.get("/uploaddb", channelsController.createVideos);


router.get('/trending', channelsController.getTrending);

router.get('/subscription',channelsController.getSubscription);

router.get('/library',channelsController.getLibrary);

module.exports = router;