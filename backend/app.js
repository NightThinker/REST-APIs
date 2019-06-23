const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

//x-www-form-urlencoded <form></form>
// app.use(bodyParser.urlencoded())

//application/json
app.use(bodyParser.json());

app.use('/feed', feedRoutes);

app.listen(8080);
