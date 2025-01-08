const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

// Create the HTTP server
const app = http.createServer((req, res) => {
  const responseText = 'Hello ALX!';

  res.statusCode = 200; // Set HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Set response content type
  res.end(responseText); // Send the response and end it
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;

