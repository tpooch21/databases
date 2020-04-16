var Friends = {
  list: [],
  render: _.template(`
      <ul class="friend">
        <li><%- username %></li>
      </ul>
    `),
  toggleStatus: function(event) {
    if (Friends.list.includes(event.target.innerText)) {
      let index = Friends.list.findIndex(friend=>friend === event.target.innerText);
      Friends.list.splice(index, 1);
    } else {
      Friends.list.push(event.target.innerText);
    }
    MessagesView.render();
  }
};
