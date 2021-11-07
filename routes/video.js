const express = require("express");
const path = require('path');

const router = express.Router();


const videoController = require('../controllers/video');


router.get("/watch/:videoId", videoController.getWatch);

router.get("/video/:videoId", videoController.getVideo)



module.exports = router;