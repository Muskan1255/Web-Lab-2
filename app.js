const express = require('express');


const app = express();
const port = 3000;

// Default Route
app.get('/', (req, res) => {
  res.send('Hello WEB322!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
