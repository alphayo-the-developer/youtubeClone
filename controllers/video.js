const Video = require('../models/video');
const fs = require("fs");

const getDb = require("../util/database").getDb;

const Grid = require('gridfs-stream');
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
request = require('request');


// var S3 = require('aws-sdk').S3,
//     S3S = require('s3-streams');



const mongoURI = 'mongodb://127.0.0.1:27017/';

// // Create mongo connection
// const conn = mongoose.createConnection(mongoURI);

// // Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('videos');
// });




exports.getWatch = (req, res, next) => {
    let id =  req.params.videoId;
    Video.getWatch(id)
    .then(video => {
        res.render("watch",{
            video : id,
            videoDetail: video
        });    
    })
    
}

// exports.getVideo = (req, res, next) => {
    
//         let id = req.params.videoId;
//         Video.getVideo(id).then(video => {
//             // const videoPath = video.location;

//             const range = req.headers.range;
//             if(!range) {
//                 res.status(400).send("require range header");
//             }

//             const videoPath = "./videos/gone.mp4";
    
    

//             const videoSize = fs.statSync(videoPath).size;

//             //parse range
//             const CHUNK_SIZE = 10**6; //1MB
//             const start = Number(range.replace(/\D/g, ""));
//             const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

//             const contentLength = end - start + 1;
//             const headers = {
//                 "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
//                 "Accept-Ranges": "bytes",
//                 "Content-Length": contentLength,
//                 "content-Type": "video/mp4",
//             };

//             res.writeHead(206, headers);

//             const videoStream = fs.createReadStream(videoPath, {start, end});


            
            
            
//             // const readStream = gfs.createReadStream(video.filename);
//             videoStream.pipe(res)

            
        
//             //   Finally pipe video to response
//             //   video.pipe(res);
                


//              // videoStream.pipe(res);
//           })
//     // //     const db = getDb();

//     //     db.collection("videos.files").find({ filename:"boy1"})
//     //     .next()
//     //     .then((video) => {
//     //     // console.log(video);
//     //     if (!video) {
//     //         res.status(404).send("No video uploaded!");
//     //         return;
//     //       }
    
//     //       // Create response headers
//     //       const videoSize = video.length;
//     //       const start = Number(range.replace(/\D/g, ""));
//     //       const end = videoSize - 1;
    
//     //       const contentLength = end - start + 1;
//     //       const headers = {
//     //         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//     //         "Accept-Ranges": "bytes",
//     //         "Content-Length": contentLength,
//     //         "Content-Type": "video/mp4",
//     //       };
    
//     //       // HTTP Status 206 for Partial Content
//     //       res.writeHead(206, headers);
    
//     //       // Get the bucket and download stream from GridFS
//     //       const bucket = new mongodb.GridFSBucket(db);
//     //       const downloadStream = bucket.openDownloadStreamByName('bigbuck', {
//     //         start
//     //       });
    
//     //       // Finally pipe video to response
//     //       downloadStream.pipe(res);
//     //     })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
         
// }

exports.getVideo = (req, res, next) => {
    // var S3 = require('aws-sdk').S3,
    // S3S = require('s3-streams');
 
    // var download = S3S.ReadStream(new S3(), {
    //     Bucket: 'youtubeclonevideos',
    //     Key: '86806d4f-0e61-4683-a75d-6857fa986cc4.mp4',
    //     // Any other AWS SDK options
    // });
    request('https://youtubeclonevideos.s3.us-east-2.amazonaws.com/52d268ff-6043-4930-87ef-f80f717c4814.mp4').pipe(res)
    // download.pipe(res)
}

exports.editVideo = (req, res, next) => {

}