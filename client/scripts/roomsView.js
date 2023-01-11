// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.render);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    console.log(Rooms._data);
    Rooms._data.forEach(room => {
      RoomsView.renderRoom(room);
    });

    console.log('clicked here');
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $rooms = $('<div>' + roomname + '</div>');
    RoomsView.$select.appendTo($rooms);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // we want to add a room
    // jQuery pop up input, save it in a variable
    var newRoom = prompt('Enter new room name');
    console.log(newRoom);
    // add it to rooms object
    Rooms.add(newRoom);
    // rerender the page with new added room


    // append a new room once event happens
  }

};
