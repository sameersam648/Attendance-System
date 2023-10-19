const express = require('express');
const port = 80;
const path = require('path');
var app = express();

// Setting static and views middleware
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views',path.join(__dirname, 'views'));

//Use middleware
app.use(express.urlencoded());

// Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html')
    )});

// Server starts here
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})