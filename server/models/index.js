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

      let messageQuery = 'INSERT INTO messages VALUES(0, ?, ?, ?)'
      db.connector.connect(err => {
           if (err) {
             callback(err);
           }
           console.log('Connected!');

           var userQuery = 'select id from user WHERE username = ?';
           var userArgs = [thingToPost.username];

           db.connector.query(userQuery, userArgs, (err, result) => {
             if (err) {
               callback(err);
             }

             console.log('Successful Query!');
             console.log('Loggin user id result => ', result);

             var messageArgs = [thingToPost.message, thingToPost.roomname, result[0].id];
             db.connector.query(messageQuery, messageArgs, (err) => {
               if (err) {
                callback(err);
               }

               console.log('Successul insert!');
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

      console.log('Checking if userPost is called!');
      let userQuery = 'INSERT INTO user VALUES(0, ?)';
      var userArgs = [userobject.username]
      db.connector.connect(err => {
           if (err) {
             callback(err);
            }
            console.log('Success!');

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