const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
var ObjectId = require('mongodb').ObjectId;
const fs = require("fs")



const crypto = require('crypto');
const path = require('path');
// const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');



class Video {
  constructor(thumbnail, duration, channel,title,description, comments, views,likes, userId, uploadDate, location,  dislikes) {
    this.thumbnail = thumbnail;
    this.duration = duration;
    this.channel = channel;
    this.title = title;
    this.description = description;
    this.comments = comments;
    this.views = views;
    this.likes = likes;
    this.userId = userId;
    this.uploadDate = uploadDate;
    this.location = location;
    this.dislikes = dislikes;
  }

  save() {
    const db = getDb();
    let dbop;
    dbop = db.collection("videos").insertOne(this);
    return dbop
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static upload(){

        
    
    
    var gfs = Grid(db, mongodb);
    gfs.collection('uploads');
    
    //Create storage engine
    const storage = new GridFsStorage({
      url: 'mongodb://127.0.0.1:27017/',
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          Crypto.randomBytes(16, (err, buf) => {
            if(err) {
              return reject(err);
            }
            const filename = buf.toString('hex') + Path2D.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'videos'
            };
            resolve(fileInfo);
          })
        })
      }
    })

    const upload = multer({storage})
    return upload;

  }

  static getAllVideos(){
    const db = getDb();
    return db
      .collection("videos")
      .find()
      .toArray()
      .then((videos) => {
        return videos;
      })
      .catch((err) => {
        console.log(err);
      });
  }


  static getWatch(videoId){
    this.countViews(videoId)
    const db = getDb();
    return db
      .collection("videos")
      .find({ _id: new mongodb.ObjectId(videoId) })
      .next()
      .then((video) => {
        // console.log(video);
        return video;
      })
      .catch((err) => {
        console.log(err);
      });

  }
  static getVideo(videoId){
    this.countViews(videoId)
    
    const db = getDb();
    db.collection("fs.files")
    
    // return db
    //   .collection("videos")
    //   .find({ _id: new mongodb.ObjectId(videoId) })
    //   .next()
    //   .then((video) => {
    //     // console.log(video);
    //     return video;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return db.collection("fs.files").findOne({ _id: new mongodb.ObjectId("61883d10eeb0e41cd18b55e8") })
    
      .then((video) => {
        const bucket = new mongodb.GridFSBucket(db);
        const downloadStream = bucket.openDownloadStream(new mongodb.ObjectId("61883d10eeb0e41cd18b55e8"))
        .pipe(fs.createWriteStream('./outputFile.mkv'));
        // return {b:bucket,n:video.filename};

        return downloadStream
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  static getVideosByNames(payload) {
    // {$regex: new RegExp('^'+payload+'.*','i')}
    const db = getDb();
    return db
      .collection("videos")
      .find({title: {$regex: new RegExp('^'+payload+'.*','i')}})
      .toArray()
      .then((videos) => {
        return videos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static countViews(id){
    const db = getDb();
    db.collection("videos").updateOne(
      { _id: ObjectId(id) },
      {
        $inc: { "views": 1},
        $currentDate: { lastModified: true }
      }
  )
  }

  static countLikes(id){
    const db = getDb();
    db.collection("videos").updateOne(
      { _id: ObjectId(id) },
      {
        $inc: { "likes": 1},
        $currentDate: { lastModified: true }
      }
  )
  }

  static countDislikes(){
    const db = getDb();
    db.collection("videos").updateOne(
      { _id: ObjectId(id) },
      {
        $inc: { "likes": 1},
        $currentDate: { lastModified: true }
      }
  )



  }

  static setDescription() {

  }
}

module.exports = Video;