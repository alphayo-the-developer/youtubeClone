const uuid = require('uuid').v4;
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");


const s3 = new aws.S3({apiVersion: '2006-03-01'});

const uploadS3 = multer({
    storage: multerS3({
        s3:s3,
        bucket: 'youtubeclonevideos',
        metadata:(req,file,cb) => {
            cb(null, {fieldName: file.fieldname});

        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
        }
    })
})


module.exports = uploadS3;
