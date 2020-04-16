var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //set click handler only once, on initialize. Therefore, stop calling initialize upon fetch
    RoomsView.$select.on('change', function() {
      $('.chat').hide();
      let room = RoomsView.$select.val() || '';
      if (room !== '') {
        $('.' + RoomsView.$select.val()).show();
      } else {
        $('.chat').show();
      }
    });

    RoomsView.$button.on('click', (event)=>{
      event.preventDefault();
      let room = prompt('Room Name?', '').replace(/[^a-zA-Z0-9_]/g, '') || '';
      RoomsView.$select.append(`<option value="${room}">${room}</option>`);
      RoomsView.$select[0].value = room;
      RoomsView.$select[0].dispatchEvent(new Event('change'));
    });

  },

  render: function() {
<<<<<<< HEAD
    // need to iterate over the rooms to render all rooms on the DOM
  },

  // need a function that renders individual rooms to the DOM
  renderRoom: function() {

=======
    let rooms = Messages.result.reduce((a, b)=>{
      if (typeof b.roomname === 'string') {
        a[b.roomname] = true;
      }
      return a;
    }, {});
    let room = RoomsView.$select.val() || '';
    RoomsView.$select[0].innerHTML = '';
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
    Object.keys(rooms).forEach(room=>{
      RoomsView.$select.append(`<option value="${room.replace(/[^a-zA-Z0-9_]/g, '-') || ''}">${room}</option>`);
    });
    RoomsView.$select[0].value = room;
    RoomsView.$select[0].dispatchEvent(new Event('change'));
>>>>>>> e575451a5539fb23d26e7d7881266db5a309009e
  }

};
