const express = require("express");

const router = express.Router();


const channelsController = require('../controllers/channel');


router.get("/", channelsController.getIndex );
router.get("/upload", channelsController.uploadVideos );
// router.post("/upload", channelsController.createVideos);
router.post("/addComments", channelsController.createComment);
router.post("/addReplies", channelsController.createReply);
router.get("/getComments", channelsController.getComments);
router.post("/getReplies", channelsController.getReplies);
router.post("/addLike", channelsController.addCommentLikes);


router.get('/trending', channelsController.getTrending);

router.get('/subscription',channelsController.getSubscription);

router.get('/library',channelsController.getLibrary);

router.get('/searchvid',channelsController.searchVideos);
router.post('/searchvidSuggest',channelsController.searchVideoSuggest);



module.exports = router;