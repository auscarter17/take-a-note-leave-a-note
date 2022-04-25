const express = require('express');
const app = express();
// port to access from localhost on browser
const PORT = process.env.PORT || 3001;
// routing locations to point to where the public information will meet the backend
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//points app to routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// begins app on port and gives terminal message showing the connection is active
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  