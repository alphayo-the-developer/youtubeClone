const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;


const crypto = require('crypto');
const path = require('path');
// const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');



class Video {
  constructor(thumbnail, duration, channel,title,description, comments, views,likes, userId, uploadDate, location) {
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

        
    const db = getDb();
    console.log(db)
    
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

  static getVideo(videoId){
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

  static countViews(){

  }

  static countLikes(){

  }

  static countDislikes(){

  }

  static getUploadDate(){

  }

  static getDescription() {

  }

  static getComments() {

  }
}

module.exports = Video;