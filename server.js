const express = require('express');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./serverConfig');
const  configureRoutes = require('./routes/index');

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + SERVER_CONFIGS.PORT);
});
