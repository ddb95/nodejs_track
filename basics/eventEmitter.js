var events = require('events');
// Contructor
eventEmitter = new events.EventEmitter();

// Wire up events with this
eventEmitter.on('someEvent', (message) => {
    console.log(message)
});

// Emit the event
eventEmitter.emit('someEvent', 'Event Emitted Finally')