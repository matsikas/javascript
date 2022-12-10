// The express module is a popular web application framework for Node.js, and it is typically 
// used to create web servers and APIs.

// Define the Express.js app
const express = require('express');
const app = express();

// Define the greeting function
function getGreeting(name) {
  return `Hello, ${name}!`;
}

// Define the greeting function
function add(a, b) {
    return a + b;
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

// Define the "/sum" endpoint
app.get('/sum', (req, res) => {
    // Extract the "a" and "b" query parameters from the request
    const a = req.query.a;
    const b = req.query.b;
  
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const num3 = num1 + num2;
    console.log('A ' + num1 + ' B ' + num2 + ' = C ' + num3);
  
    const str = String(num3);

    // Send the sum as the response
    res.send(str);
  });

// Start the Express.js app and listen on port 3000
app.listen(3000, () => {
  console.log('Greeting microservice listening on port 3000!');
});


// You can call this microservice from the browser as follows:
// http://localhost:3000/greeting/Dave

//http://localhost:3000/sum?a=2&b=3