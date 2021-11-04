const express = require("express");
const fs = require("fs");
const path = require('path');

const router = express.Router();


router.get("/watch", function (req, res) {
    res.render("watch");
});

router.get("/video", function (req, res) {
    const range = req.headers.range;
    if(!range) {
        res.status(400).send("require range header");
    }

    const videoPath = "./videos/gone.mp4";
    const videoSize = fs.statSync("./videos/gone.mp4").size;

    //parse range
    const CHUNK_SIZE = 10**6; //1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "content-Type": "video/mp4",
    };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, {start, end});

    videoStream.pipe(res);

})



module.exports = router;