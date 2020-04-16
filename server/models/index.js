var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      const queryString = `select * from messages`;
      db.connector.connect((err) => {
        if (err) {
          callback(err);
        }
        db.connector.query(queryString, function(err, results) {
          if (err) {
            console.log('error!', err);
          } else {
            callback(results);
          }
        });
      });
    }, // a function which produces all the messages
    post: function (thingToPost, callback) {

      // thingToPost will be input object with {message: x, username: x, roomname: x}

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

           var userQuery = 'select id from user WHERE username = ?';
           var userArgs = [thingToPost.username];

           db.connector.query(userQuery, userArgs, (err, result) => {
             if (err) {
               callback(err);
             }

             console.log('Logging result from userQuery => ', result);

             var messageArgs = [thingToPost.message, result, thingToPost.roomname];
             db.connector.query(messageQuery, messageArgs, (err) => {
               if (err) {
                callback(err);
               }
               callback(null);
             });
           });
         });

    } // a function which can be used to insert a message into the database

    // *Can also consider using promises for any of these tasks
  },

  users: {
    // Ditto as above.
    get: function () {
      const queryString = `select * from user`;
      db.connector.connect((err) => {
        if (err) {
          callback(err);
        }
        db.connector.query(queryString, function(err, results) {
          if (err) {
            console.log('error!', err);
          } else {
            callback(results);
          }
        });
      });
    },

    post: function (userobject, callback) {

      let userQuery = 'INSERT INTO user VALUES(0, ?)';
      var userArgs = [userobject.username]
      db.connector.connect(err => {
           if (err) {
             callback(err);
            }

            db.connector.query(userQuery, userArgs, (err) => {
             if (err) {
               callback(err);
             }
             callback(null);
            });
      });
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