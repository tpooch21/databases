var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((err, results) => {
        if (err) {
          res.statusCode(404);
        } else {
          res.statusCode(200).json(results);
        }
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.json, (err) => {
         if (err) {
           res.statusCode(404);
         } else {
           res.statusCode(200);
         }
      });
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.statusCode(404);
        } else {
          res.statusCode(200).json(results);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.json, (err) => {
        if (err) {
          res.statusCode(404);
        } else {
          res.statusCode(200);
        }
     });
    }
  }
};

