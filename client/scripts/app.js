var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(()=>App.fetch(), 5000);
  },
  // todo: need to setInterval to refresh
  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      // assign the data results (array of the messages) to message result
      Messages.result = data.results;

      // render the messages on the html
      MessagesView.render();

      // update the select options to display each room
      RoomsView.render();

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
