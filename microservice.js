// The express module is a popular web application framework for Node.js, and it is typically 
// used to create web servers and APIs.

// Define the Express.js app
const express = require('express');
const app = express();

// Define the greeting function
function getGreeting(name) {
  return `Hello, ${name}!`;
}

// Define the route for the greeting microservice
app.get('/greeting/:name', (req, res) => {
  // Get the user's name from the request parameters
  const name = req.params.name;

  // Generate the greeting message
  const greeting = getGreeting(name);

  // Send the greeting message in the response
  res.send(greeting);
});

// Start the Express.js app and listen on port 3000
app.listen(3000, () => {
  console.log('Greeting microservice listening on port 3000!');
});


// You can call this microservice from the browser as follows:
// http://localhost:3000/greeting/Dave