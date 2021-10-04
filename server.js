const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views','views');


const videoRoutes = require('./routes/video')

app.use(videoRoutes);

app.listen(3000);