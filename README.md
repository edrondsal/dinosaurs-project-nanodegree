# Dinosaurs Project

This project takes as source the Starter Code [View the Github repository](https://github.com/udacity/Javascript) available by Udacity. The project is developed in Webpack.

## Table of Contents

* [Server](#server)
* [Client](#client)
* [Getting Started](#getting-started)


## Server <a name="server"></a>

The server is a simple express server that host the web app statically and also host the `dino.json` in order to not expose the data.

## Client <a name="client"></a>

The client uses the view files as in the Starter Code. 
The Javascript files have beend designed to ensure application of the concepts learned during the first course. And it is composed of the following files:

1. Model.js : Containing the Classes:
    * Species: the generic Class for all Species.
    * Dinosaurs : the Class for the dinosaurs, extending the Species Class
    * Humans : the Class for humans, also extending the Species Class
2. NetworkManager.js: Containing the object for realizing network request to the express API to get the dinosaurs data. This is realized with the Module Pattern
3. FactSpeciesFactory.js: Containing the object for comparaison and creation of facts. This is realized using the Factory Functions Pattern
4. TileFactory.js: Containing the object to create the tile data and view elements. This is realized using the Factory Functions Pattern
5. ViewController.js: Containing all the logic of the web app, with private methods and public API. This is realized with the Exposed Module Pattern.

## Getting Started <a name="getting-started"></a>

First clone this github project, and install dependencies: `npm install`

Then run webpack to create the distribution files: `npm run build-dev`

Finally start the express server: `npm run start`

Now the web app is available in the localhost:  `localhost:8088`



