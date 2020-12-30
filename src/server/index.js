/*--------------------------------------------------------
Server code for Dinosaurs UDACITY Project - Intermediate Javascript Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
var fs = require('fs'); 


const port = 8088;

let internalServerError = {
  code: 500,
  message: 'Internal Server Error'
}

// Start up an instance of app
const app = express();

//Configuration of express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Configuration of express to use  Cors for cross origin allowance
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
const server = app.listen(port,listening);


/**
 * @description Function working as the callback of the listen function used to create the server
 * @since      0.0.1
 * @access     private
*/
function listening(){
    console.log(`server running in localhost:${port}`);
}

//Configuration of GET route
app.get('/dinosaurs',getDinosaursCallback)

/**
 * @description Function working as the callback for getting the dinosaurs array
 * @since   0.0.1
 * @access  private
 * @param   {Request}   request
 * @param   {Response}  response
 * @returns {Response}  response containing array of dinosaurs 
*/
function getDinosaursCallback(request, response) {
    var filePath = path.join(__dirname, 'dino.json');
    var data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    response.send(data.Dinos);
}
