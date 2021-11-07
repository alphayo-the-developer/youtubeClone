const Video = require('../models/video');
const fs = require("fs");

exports.getWatch = (req, res, next) => {
    res.render("watch",{
        video : req.params.videoId
    });
}

exports.getVideo = (req, res, next) => {
    
        let id = req.params.videoId;
        Video.getVideo(id).then(video => {
            const videoPath = video.location;

            const range = req.headers.range;
            if(!range) {
                res.status(400).send("require range header");
            }

            // const videoPath = "./videos/gone.mp4";
    
    

            const videoSize = fs.statSync(videoPath).size;

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



    
}