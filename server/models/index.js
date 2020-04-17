var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      const queryString = `select * from messages`;

      db.query(queryString, function(err, results) {
        if (err) {
          console.log('error!', err);
        } else {
          callback(results);
        }
      });

    }, // a function which produces all the messages

    post: function (thingToPost, callback) {

      let messageQuery = 'INSERT INTO messages VALUES(0, ?, ?, ?)'

      var userQuery = 'select id from user WHERE username = ?';
      var userArgs = [thingToPost.username];

      db.query(userQuery, userArgs, (err, result) => {
        if (err) {
          callback(err);
        }

        console.log('Successful Query!');
        console.log('Loggin user id result => ', result);

        var messageArgs = [thingToPost.message, thingToPost.roomname, result[0].id];
        console.log(result[0].id);

        db.query(messageQuery, messageArgs, (err, results) => {
          if (err) {
          callback(err);
          }

          console.log('Successul insert!');
          callback(null, results);
        });
      });


    } // a function which can be used to insert a message into the database

    // *Can also consider using promises for any of these tasks
  },

  users: {
    // Ditto as above.
    get: function () {
      const queryString = `select * from user`;

      console.log('Logging query string => ', queryString);

      db.query(queryString, function(err, results) {
        if (err) {
          console.log('error!', err);
        } else {
          callback(results);
        }
      });

    },

    post: function (userobject, callback) {

      console.log('Checking if userPost is called!');
      let userQuery = 'INSERT INTO user VALUES(0, ?)';
      var userArgs = [userobject.username]
      console.log('Logging userArgs => ', userArgs);

      db.query(userQuery, userArgs, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });

    }
  }

};
