const express = require("express");
// const fs = require("fs");
// const path = require('path');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Video = require('./models/video');
// const uuid = require('uui').v4;
// const getDb = require("./util/database").getDb;
const uploadVid = require("./util/uploadvideo");
const uploadS3 = require("./util/s3-upload");

const mongodb = require("mongodb");
const crypto = require('crypto');
const path = require("path");
// const mongoose = require('mongoose');
const multer = require("multer");
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const app = express();

const mongoConnect = require("./util/database").mongoConnect;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", "views");

// {dest: 'uploads/'}

const videoRoutes = require("./routes/video");
const channelRoutes = require("./routes/channel");
const { abort } = require("process");

// app.post('/upload',(req,res,next)=> {
//   console.log(req.files)
// })

app.use(videoRoutes);
app.use(channelRoutes);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.fieldname === "file") {
//       cb(null, './uploads/videos/')
//   }
//   else if (file.fieldname === "thumbnail") {
//       cb(null, './uploads/thumbnails/');
//   }
//   },
//   filename: (req, file, cb) => {
//     const { originalname } = file;
//     // cb(null,`${uuid()}-${originalname}`);
//     cb(null, originalname);
//   },
// });


// Create storage engine

const storage = new GridFsStorage({
  url: 'mongodb://127.0.0.1:27017/youtube',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err) {
          return reject(err);
        }
        // const filename = buf.toString('hex') + Path2D.extname(file.originalname);
        const filename = 'boy';
        const fileInfo = {
          filename: filename,
          bucketName: 'videos'
        };
        resolve(fileInfo);
      })
    })
  }
})



// const upload = multer({ storage });

// upload.single('file')
// app.use(
//   "/upload",
//   upload.fields([
//     {
//       name: "thumbnail",
//       maxCount: 1,
//     },
//     {
//       name: "file",
//       maxCount: 1,
//     },
//   ]),
//   (req, res, next) => {
//     uploadVid("full")
//     res.redirect('/')
//   }
// );

app.use(
  "/upload",
  uploadS3.single("file"),
  (req, res, next) => {
    Video.getAllVideos()
    .then(videos => {
      res.render('upload',{
        videos:videos
      })    
    })
    
  }
);

app.use((req, res, next) => {
  res.status(404).render("404");
});

mongoConnect((client) => {
  app.listen(port);
});

// app.listen(3000);

// const db = getDb();
// // console.log(db)

// var gfs = Grid(db, mongodb);
// gfs.collection('videos');

// // Create storage engine
// const storage = new GridFsStorage({
//   url: 'mongodb://127.0.0.1:27017/',
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if(err) {
//           return reject(err);
//         }
//         // const filename = buf.toString('hex') + Path2D.extname(file.originalname);
//         const filename = 'boy';
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'videos'
//         };
//         resolve(fileInfo);
//       })
//     })
//   }
// })

// app.get('/file', (req,res,next) => {
//   gfs.files.find().toArray((err, files) => {
//     //check if files
//     if(!files || files.length === 0){
//       return res.status(404).json({
//         err: 'No files exist'
//       })
//     }

//     return res.json(files);
//   })
// })
