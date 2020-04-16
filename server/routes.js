var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

controller.users.post({body: {username: 'Trevor'}}, {});

controller.messages.post( { body: {
  username: 'Trevor',
  message: 'In mercy\'s name, three days is all I need.',
  roomname: 'Hello'
} }, {});

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

