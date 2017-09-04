/* eslint-disable */
const client = feathers();
client.configure(feathers.hooks());

// Create the Feathers application with a `socketio` connection
client.configure(feathers.socketio(socket));

// Get the service for our `messages` endpoint
const messages = client.service('messages');

// Log when anyone creates a new message in real-time!
messages.on('created', message =>
  alert(`New message from ${message.name}: ${message.text}`)
);

// Create a test message
messages.create({
  name: 'Test user',
  text: 'Hello world!'
});

messages.find().then(page => console.log('Current messages are', page));
