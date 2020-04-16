var MessageView = {

  render: _.template(`
      <div class="chat <%= roomname.replace(/[^a-zA-Z0-9_]/g, '-') %><%= Friends.list.includes(username) ? " friend" : "" %>">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="roomname"><%- roomname %></div>
      </div>
    `)

};
