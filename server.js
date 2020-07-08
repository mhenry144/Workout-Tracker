const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(5000);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);