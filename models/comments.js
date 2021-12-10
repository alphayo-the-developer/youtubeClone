const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
var ObjectId = require('mongodb').ObjectId;


class Comment {
    constructor(videoId,commentData,channelId,replyCount = 0,likes = 0) {
        this.videoId = videoId;
        this.commentData = commentData;
        this.channelId = this.channelId;
        this.replyCount = replyCount;
        this.likes = likes;
    }

    createComment() {
        const db = getDb();
        let dbop;
        dbop = db.collection("comments").insertOne(this);
        return dbop
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static addReplies(id,comment) {
        const db = getDb();
        let dbop;
        dbop = db.collection("replies").insertOne({parentComment:id,commentData:comment});
        this.getReplyCount(id);
        return dbop
        .then((result) => {
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static fetchAllComments() {
        const db = getDb();
        return db.collection("comments").find()
        .toArray()
        .then((comments) => {
            return comments;
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static fetchReplies(id) {
        const db = getDb();
        return db.collection("replies").find({parentComment:id},{commentData:1})
        .toArray()
        .then((comments) => {
            return comments;
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static setReplyCount = (id, value) => {
        const db = getDb();
        db.collection("comments").updateOne(
            { _id: ObjectId(id) },
            {
              $set: { "replyCount": value},
              $currentDate: { lastModified: true }
            }
        )
        
    }

    static getReplyCount = (id) => {
        const db = getDb();
        return db.collection("replies").find({parentComment:id},{commentData:1})
        .toArray()
        .then((comments) => {
            let value =  comments.length;
            this.setReplyCount(id,value)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static setLikeCount = (id) => {
        const db = getDb();
        db.collection("comments").updateOne(
            { _id: ObjectId(id) },
            {
              $inc: { "likes": 1},
              $currentDate: { lastModified: true }
            }
        )
        
    }

    
}


module.exports = Comment;
