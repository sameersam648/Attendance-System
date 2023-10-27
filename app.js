const express = require('express');
const port = 80;
const path = require('path');
var app = express();

// Setting static and views middleware
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, 'views'));

//Use middleware
app.use(express.urlencoded());

// Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/signUP.html')
    )});

// Server starts here
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})