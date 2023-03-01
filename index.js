const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome !!! , This is an sample app to demonstrate code pipeline in AWS. This is first deployment.');
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
