var MessagesView = {

  $chats: $('#chats'),
  // May need to fix
  initialize: function() {
    MessagesView.$chats[0].innerHTML = '';
  },
  // display message on screen
  render: function() {
    MessagesView.initialize(); //delete old messages on refresh
    //at least until we figure out how to filter out the duplicates from Messages.result
    //maybe we can use objectID

    // iterate over all the messages
    for (let i = 0; i < Messages.result.length; i++) {
      // template was throwing error for undefined values. Bad Goose
      if (typeof Messages.result[i].roomname !== 'string') {
        Messages.result[i].roomname = '';
      }
      if (typeof Messages.result[i].text !== 'string') {
        Messages.result[i].text = '';
      }
      if (typeof Messages.result[i].username !== 'string') {
        Messages.result[i].username = '';
      }
      MessagesView.renderMessage(Messages.result[i]);
    }
    $('.username').on('click', Friends.toggleStatus);
  },
  // function for displaying individual message (helper function for render function above)
  renderMessage: function(message) {
    // append the message on html
    MessagesView.$chats.append(MessageView.render(message));
  }

};