var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      console.log('Logging to see if get controller entered');
      models.messages.get((err, results) => {
        if (err) {
          res.status(404);
        } else {
          res.json(results);
        }
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, (err, results) => {
         if (err) {
           res.status(501);
         } else {
           res.json(results);
         }
      });
     // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Logging to see if get controller is entered');
      models.users.get((err, results) => {
        if (err) {
          res.status(404);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {

      models.users.post(req.body, (err, results) => {
        if (err) {
          res.status(501);
        } else {
          res.json(results);
        }
     });
    }
  }
};

