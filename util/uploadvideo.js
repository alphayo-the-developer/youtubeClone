const mongodb = require("mongodb");
const Video = require('../models/video');
const fs = require("fs");
const {GridFsStorage} = require('multer-gridfs-storage');


uploadVid = (location) => {
    // mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/', function (error, client) {
    //       if (error) {
    //           console.log(error)
    //             // res.json(error);
    //         return;
    //       }
    //       // connect to the videos database
    //       const db = client.db('youtube');
      
    //       // Create GridFS bucket to upload a large file
    //       const bucket = new mongodb.GridFSBucket(db);
      
    //       // create upload stream using GridFS bucket
    //       const videoUploadStream = bucket.openUploadStream('bigbucky');
      
    //       // You can put your file instead of bigbuck.mp4
    //       const videoReadStream = fs.createReadStream('./uploads/94f3b13a334c120361b945fa12338163.webp');
      
    //       // Finally Upload!
    //       videoReadStream.pipe(videoUploadStream);
      
    //       // All done!
    //     //   res.status(200).send("Done...");
    
    //     });


    


  
    

    const video = new Video("title", "price", "description", "imageUrl","video2", "dff","ddd","ff","dff","ddd",location);
    video.save()
        .then((result) => {
            // console.log(result);
            console.log("Created video");
            // res.redirect("/admin/add-product");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = uploadVid;