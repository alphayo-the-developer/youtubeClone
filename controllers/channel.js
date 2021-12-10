const Video = require('../models/video');
const Comment = require('../models/comments');
const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;
// const fs = require('fs');
// const multer = require('multer');
// var formidable = require('formidable');
// const mongodb = require('mongodb');






exports.getIndex = (req, res, next) => {
    Video.getAllVideos()
    .then(videos => {
      res.render('index', {
        videos: videos,
        verified: true,
        // path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
}


exports.getTrending = (req, res, next) => {
    
    Video.getAllVideos()
    .then(videos => {
      res.render('trending', {
        TrendingVideos: videos
      });
    })
    .catch(err => {
      console.log(err);
    });
    
}


exports.getSubscription = (req, res, next) => {
    Video.getAllVideos()
    .then(videos => {
      res.render('subscriptions', {
        SubscribedVideos: videos
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getLibrary = (req, res, next) => {
    Video.getAllVideos()
    .then(videos => {
      res.render('library', {
        WatchedVideos: videos,
        LikedVideos:videos,
        WatchLaterVideos:videos
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.uploadVideos = (req, res, next) => {
    res.render('upload');
}




exports.createVideos = (req, res, next) => {
    console.log(req.file)
    res.redirect('/')
        
    
 
  



        // mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/', function (error, client) {
        //   if (error) {
        //     //   console.log(error)
        //         res.json(error);
        //     return;
        //   }
        //   // connect to the videos database
        //   const db = client.db('youtube');
      
        //   // Create GridFS bucket to upload a large file
        //   const bucket = new mongodb.GridFSBucket(db);
      
        //   // create upload stream using GridFS bucket
        //   const videoUploadStream = bucket.openUploadStream('bigbuck');
      
        //   // You can put your file instead of bigbuck.mp4
        //   const videoReadStream = fs.createReadStream(req.body.file);
      
        //   // Finally Upload!
        //   videoReadStream.pipe(videoUploadStream);
      
        //   // All done!
        //   res.status(200).send("Done...");
    
        // });

  


    
}


exports.searchVideos = (req,res,next) => {
    let payload = req.query.search;
    console.log(payload)
    Video.getVideosByNames(payload)
    .then(vidz => {
        res.render('index',{
          videos:vidz,
          verified: true,
        });
    
    })
    .catch(err => {
      console.log(err);
    });
}


exports.searchVideoSuggest = (req, res, next) => {

    let payload = req.body.payload.trim();

    Video.getVideosByNames(payload)
    .then(videos => {
      videos = videos.slice(0, 10)
      res.send({payload:videos});
    })
    .catch(err => {
      console.log(err);
    });

}

exports.createComment = (req,res,next) => {
    let payload = req.body.payload.trim();
    let id = req.body.id.trim();
    const comment = new Comment(id, payload)
    comment.createComment()
    .then((result) => {
        console.log("Added Comment");
    })
    .catch((err) => {
        console.log(err);
    })
    res.status('200')
}

exports.createReply = (req,res,next) => {
    let payload = req.body.payload.trim();
    let id = req.body.id.trim();
    console.log(req.body)
    Comment.addReplies(id,payload);
}

exports.getComments = (req,res,next) => {
    Comment.fetchAllComments().
    then((comments) => {
        // console.log(comments)
        res.json({coments:comments})
    }).catch((err) => {
        console.log(err)
    })
}

exports.getReplies = (req,res,next) => {
    id = req.body.replyId;
    Comment.fetchReplies(id)
    .then((replies) => {
        // console.log(comments)
        res.json({replies:replies})
    }).catch((err) => {
        console.log(err)
    })
}

exports.addCommentLikes = (req,res,next) => {
    id = req.body.id;
    Comment.setLikeCount(id)
    
}