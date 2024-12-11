const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Simulated asynchronous error'));
        } else {
          resolve('Success!');
        }
      }, 1000);
    });
  };

  asyncOperation()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error'); // Send an error response to the client
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});