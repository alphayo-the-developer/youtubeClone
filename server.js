const express = require("express");
// const fs = require("fs");
// const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const uuid = require('uui').v4;
// const getDb = require("./util/database").getDb;
const uploadVid = require("./util/uploadvideo");

const mongodb = require("mongodb");
// const crypto = require('crypto');
const path = require('path');
// const mongoose = require('mongoose');
const multer = require('multer');
// const {GridFsStorage} = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');




const app = express();

const mongoConnect = require('./util/database').mongoConnect;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine','ejs');
app.set('views','views');

// {dest: 'uploads/'}

const videoRoutes = require('./routes/video');
const channelRoutes = require('./routes/channel');
const { abort } = require("process");

// app.post('/upload',(req,res,next)=> {
//   console.log(req.files)
// })


app.use(videoRoutes);
app.use(channelRoutes);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
  const { originalname } = file;
  // cb(null,`${uuid()}-${originalname}`);
  cb(null,originalname);
  }
})

const upload = multer({storage}) 


app.use('/upload',upload.single('file'),(req,res,next) => {
  res.json()
  // res.redirect('/uploaddb')
  // console.log(req.file)
  uploadVid(req.file.originalname)
})




mongoConnect(client => {
  app.listen(3000);

})
  
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

