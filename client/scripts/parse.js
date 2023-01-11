// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // the address where we want to contact or send a request
      type: 'GET', // HTTP VERB - tells the server what action to take
      data: { order: '-createdAt' }, // data sent to the server which specifies extra options for how the GET should happen
      contentType: 'application/json', // format of the content you provided to the server
      success: successCB,
      /* success: function(data) {  <--- successCB or cb func
          the 'data' parameter is equal to all the data that
          AJAX fetched from the server
      }
      */
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};