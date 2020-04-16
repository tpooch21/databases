var db = require('../db');

module.exports = {
  messages: {
    get: function (path, callback) {

      // Similar process as below, BUT
      // result in success case from db.connector.query will be passed back to callback --> callback(null, result)
      // query will be something like 'SELECT * FROM messages'
      // result will be array of message objects, which we pass back to controllers/index.js, then back to client

     /*
     get: function (args, callback) {
      const queryString = `select * from messages join user on messages.userID = user.id WHERE user.name = ?;`;
      const queryArgs = [args.user];
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('error!', err);
        } else {
          callback(results);
        }
      });
     */



    }, // a function which produces all the messages
    post: function (thingToPost, callback) {

      // thingToPost will be input object with {message: x, username: x, roomname: x}
      // Not sure we need path... (not calling readFile or writeFile)

      // QUERY: INSERT INTO messages VALUES(valueforColumnA (0), valueforColumnB (?), valueforColumnC (?)) --> Auto-increment values will be ignored anyway (just put a 0)
      // Use SELECT ^ (?) to get user ID for user that's being passed in and roomID
      // queryArgs = [thingToPost.textmessage, thingToPost.username, thingToPost.roomname]

      // USER QUERY: INSERT INTO users VALUES(0, ?)
      // [thingToPost.username]

      let messageQuery = 'INSERT INTO messages VALUES(0, ?, ?, ?)'
      db.connector.connect(err => {
           if (err) {
             callback(err);
           }
           module.exports.users.post(thingToPost.username, (err) => {
             if (err) {
               callback(err);
             }
             var userID = 'select id from users WHERE username = thingToPost.username';
             var queryArgs = [thingToPost.message, thingToPost.userID, thingToPost.roomname]
             db.connector.query(messageQuery, queryArgs, (err, result) => {
               if (err) {
                callback(err);
               }
               callback(null);
             })
           })
         }

      // Call db.connector.connect(err callback)
      // If error, throw error (to callback)
      // Otherwise, construct query to db (db.connector.query)
      // Also will have an error CB --> db.connector.query(sql, queryArgs, (err, result))
      // Post might not have anything the client needs back... but get will

    } // a function which can be used to insert a message into the database

    // *Can also consider using promises for any of these tasks
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      // QueryString
      // QueryArgs
      /* db.connect(err => {
        if (err) callback (err);
        db.connector.query(queryString, queryArgs, (err, result) => {
          if (err) callback(err);
          callback(null)
        })
      })


      */
    }
  }
};

// message from client: {
//  username: x
//  textmessage: x
//  roomname: x
// }

//'http://127.0.0.1:3000/classes/users'
//'http://127.0.0.1:3000/classes/messages'