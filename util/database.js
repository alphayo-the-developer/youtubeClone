const { text } = require('body-parser');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

// const mongoConnect = (callback) => {
//   mongoClient.connect('mongodb://user1:manchester237@node-course-shard-00-00.hmo89.mongodb.net:27017,node-course-shard-00-01.hmo89.mongodb.net:27017,node-course-shard-00-02.hmo89.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-e2z2v5-shard-0&authSource=admin&retryWrites=true&w=majority')
//   .then( client => {
//     console.log('connected');
//     _db = client.db();
//     callback()
//   })
//   .catch( err => {
//     console.log(err);
//     throw err;
//   })
// }



const mongoConnect = (callback) => {
  mongoClient.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser:true})
  .then( client => {
    db = client.db('shop');
    console.log('connected');
    callback()
  })
  .catch( err => {
    console.log(err);
    throw err;
  })

}


const getDb = () => {
  if(db) {
    return db;
  }
  throw 'no database';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

