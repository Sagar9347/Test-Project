const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Azure! Test</h1><p>This is your demo app running on App Service.</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});