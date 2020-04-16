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
      console.log('Logging to see is post is called');
      console.log('Logging req => ', req);
      console.log('Logging req.json => ', req.body);
      models.messages.post(req.body, (err) => {
         if (err) {
           res.sendStatus(404);
         } else {
           res.sendStatus(200);
         }
      });
     // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200).json(results);
        }
      });
    },
    post: function (req, res) {
      console.log('Is this getting called? Hope So!');
      console.log('req', req);
      console.log('req.json', req.json);
      models.users.post(req.body, (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
     });
    }
  }
};

