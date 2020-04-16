var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //get the submitted value somehow.
    //let data = $(this).serialize(); gives key=value pairs for the form
    let text = this.elements['message'].value; //returns just the message text
    // let username = window.location.href.split('?')[1].split('=')[1];
    let roomname = $('select')[0].value ? $('select')[0].value : '';
    //call Parse constructor to send message to server
    // Parse.create({text: text, username: username, roomname: roomname});

    // fetched the already existent username component App.username on app.js
    Parse.create({text: text, username: App.username, roomname: roomname});
    this.elements['message'].value = '';
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};