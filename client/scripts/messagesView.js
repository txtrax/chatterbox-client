// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // implement app.fetch()
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // $('body').append($chats)
    var $message = MessageView.render(message);
    //grab message and render()
    //append it to #chat
    MessagesView.$chats.prepend($message);
    // console.log('this is message:', $message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};