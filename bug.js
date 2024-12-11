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
      // This error handling is insufficient. The server doesn't respond.
      console.error('Error:', error); //The error is only logged, and not sent as a response to the client
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});