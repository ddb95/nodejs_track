var events = require('events');
var util = require('util');


var Person = function (name) {
    this.name = name
};

// Inherit the event emitter
util.inherits(Person, events.EventEmitter);

// Making people
var james = new Person('James');
var neil = new Person('Deboneil');
var mohar = new Person('Debadatta');

var people = [james, neil, mohar];
people.forEach((indivisual) => {
    indivisual.on('speak', (msg) => {
        console.log(indivisual.name + ' said: ' + msg)
    });
});

james.emit('speak', 'Whats up mah nigga');