// Day 3: Event Loop and Events in Node.js
// Study Topics:
// Understanding the Node.js Event Loop:
// Phases of the Event Loop (Timers, Pending I/O, Poll, Check, etc.).
// Non-blocking I/O and asynchronous nature of Node.js.
// EventEmitter class in Node.js:
// Registering event listeners.
// Emitting events.
// Removing event listeners.

// Node.js Event Loop
// The Event Loop is a fundamental concept in Node.js. It allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible. It is responsible for managing asynchronous operations.

// Phases of the Event Loop
// Timers Phase: Executes callbacks from setTimeout and setInterval.
// Pending I/O Phase: Handles I/O callbacks (e.g., network requests).
// Poll Phase: Retrieves new I/O events and executes callbacks.
// Check Phase: Executes setImmediate callbacks.
// Close Callbacks Phase: Executes callbacks for closed sockets, etc.
// EventEmitter in Node.js
// The EventEmitter class in Node.js provides a mechanism to create and handle custom events.

// Common Methods
// on: Registers an event listener.
// emit: Triggers an event.
// removeListener: Removes a specific event listener.
// removeAllListeners: Removes all listeners for an event.



// Practical Task:
// 1)Create a new file named eventDemo.js and perform the following:

// Import the events module and create an instance of EventEmitter.
// Create a custom event called greet and listen for it to log "Hello, World!".
// Trigger the greet event.
// Code Outline Example:


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// // Event listener for 'greet'
// eventEmitter.on('greet', () => {
//     console.log('Hello, World!');
// });

// // Emit the event
// eventEmitter.emit('greet');
    
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Event listener for 'greet'
eventEmitter.on('greet', () => {
    console.log('Hello, World!');
});

// Emit the event
eventEmitter.emit('greet');


// 2)Modify the program:

// Add another listener for greet that logs "Welcome to Node.js!".
// Pass a name as an argument to the greet event and display it dynamically, e.g., "Hello, [Name]!".

// Listener 1: Logs "Hello, World!"
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name || 'World'}!`);
});

// Listener 2: Logs "Welcome to Node.js!"
eventEmitter.on('greet', () => {
    console.log('Welcome to Node.js!');
});

// Emit the event with a name
eventEmitter.emit('greet', 'Ankush');


// 3)Experiment with removing an event listener using eventEmitter.removeListener.

// Define the listener
const greetListener = (name) => {
    console.log(`Hello, ${name || 'World'}!`);
};

// Register the listener
eventEmitter.on('greet', greetListener);

// Emit the event
eventEmitter.emit('greet', 'Ankush');

// Remove the listener
eventEmitter.removeListener('greet', greetListener);

// Emit the event again (listener removed, so no output)
eventEmitter.emit('greet', 'Ankush');

// Questions to Solve:
// What is the Node.js Event Loop, and why is it important?

// The Event Loop is the core of Node.js, enabling asynchronous, non-blocking operations. It ensures efficient resource usage and handles multiple I/O operations simultaneously, making Node.js ideal for high-concurrency applications.

// How do you handle multiple listeners for the same event in Node.js?

// Node.js allows multiple listeners for the same event. They are executed in the order they are registered:

// 1. Use eventEmitter.on to register multiple listeners.
// 2. Control the execution order and remove specific listeners using removeListener


// Write a program to emit a custom event called calculateSum that takes two numbers as arguments and logs their sum.


// Listener for 'calculateSum'
eventEmitter.on('calculateSum', (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
});

// Emit the 'calculateSum' event
eventEmitter.emit('calculateSum', 5, 7);
