const Video = require('../models/video');
const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
const fs = require('fs');
const multer = require('multer');
var formidable = require('formidable');
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
    res.render('trending', {
        TrendingVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        }]})
}

exports.getSubscription = (req, res, next) => {
    res.render('subscriptions', {
        SubscribedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }]})
}

exports.getLibrary = (req, res, next) => {
    res.render('library', {
        WatchedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
        WatchLaterVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
        LikedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
    })
}

exports.uploadVideos = (req, res, next) => {
    res.render('upload');
}




exports.createVideos = (req, res, next) => {
        // console.log(req.body)

        // var form = new formidable.IncomingForm();
        // form.parse(req, function (err, fields, files) {
        //     var oldpath = files.filetoupload.path;
        //     console.log(oldpath);
            // var newpath = 'E:\portfolio\youtube clone - Copy\data' + files.filetoupload.name;
            // fs.rename(oldpath, newpath, function (err) {
            //     next()
            // })
        
        // });
        
        res.json({a:'d'});
        
    
 
  



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

  


    // const video = new Video("title", "price", "description", "imageUrl","dff", "dff","ddd","df");
    // video.save()
    //     .then((result) => {
    //         // console.log(result);
    //         console.log("Created Product");
    //         res.redirect("/admin/add-product");
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}



exports.searchVideos = (req, res, next) => {

    let payload = req.body.payload.trim();
    console.log(payload)

    Video.getVideosByNames(payload)
    .then(videos => {
      videos = videos.slice(0, 10)
      res.send({payload:videos});
    })
    .catch(err => {
      console.log(err);
    });

}