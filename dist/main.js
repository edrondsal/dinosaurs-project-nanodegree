/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/styles/app.scss":
/*!************************************!*\
  !*** ./src/client/styles/app.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./src/client/styles/app.scss");
/* harmony import */ var _js_ViewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ViewController */ "./src/client/js/ViewController.js");




document.addEventListener('DOMContentLoaded', function(){
    const form          = document.getElementById('dino-compare');
    const grid          = document.getElementById('grid');
    const name          = document.getElementById('name');
    const weight        = document.getElementById('weight');
    const heightFeet    = document.getElementById('feet');
    const heightInches  = document.getElementById('inches');
    const diet          = document.getElementById('diet');
    let button          = document.getElementById('btn');
    _js_ViewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.bindDOM(form,grid,button,name,heightFeet,heightInches,weight,diet);
    button.addEventListener('click', function(){
        _js_ViewController__WEBPACK_IMPORTED_MODULE_2__.ViewController.togglePage();
    });
});



/***/ }),

/***/ "./src/client/js/FactSpeciesFactory.js":
/*!*********************************************!*\
  !*** ./src/client/js/FactSpeciesFactory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactSpeciesFactory": () => /* binding */ FactSpeciesFactory
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/client/js/Model.js");
/*--------------------------------------------------------
Dinosaurs Project - FactSpeciesFactory Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/



/**
* @class Species Fact Factury Function
* @classdesc Factury Function for Species with aggregates facts
* @param {Species|Dinosaurs|Humans} object - the base object for the factory function
* @param {?Species|Dinosaurs|Humans} compareTo - the nullable object for comparaison
*/
function FactSpeciesFactory(object, compareTo) {
    if(!(object instanceof _Model__WEBPACK_IMPORTED_MODULE_0__.Species)){
        throw new Error("Can't Factory from an Object which is not instance of Species");
    }
    /** @type {String[]}*/
    let facts = [];

    if(object instanceof _Model__WEBPACK_IMPORTED_MODULE_0__.Dinosaurs){
        facts.push(object.fact)
        if(object.species !== `Pigeon`) {
            facts.push(object.getLocationFact());
            facts.push(object.getEraFact());
            facts.push(object.compareHeight(compareTo));
            facts.push(object.compareWeight(compareTo));
            facts.push(object.compareDiet(compareTo));
        }
    }

    return Object.assign({}, object, {
      /**
      * @description Method get all the facts available
      * @return {String[]} the facts array
      */
      getFacts: function(){
          return facts;
      },
      /**
      * @description Method to retrieve a random fact
      * @return {String} the resulting fact
      */
      getRandomFact: function(){
        if(facts.length === 0) return undefined;
        if(facts.length === 1) return facts[0];
        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
      }
    });
}




/***/ }),

/***/ "./src/client/js/Model.js":
/*!********************************!*\
  !*** ./src/client/js/Model.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Species": () => /* binding */ Species,
/* harmony export */   "Dinosaurs": () => /* binding */ Dinosaurs,
/* harmony export */   "Humans": () => /* binding */ Humans
/* harmony export */ });
/*--------------------------------------------------------
Dinosaurs Project - Model Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/

/**
* @class Generic Species Class
* @classdesc Class representing an Species 
* @param {String} species - the name of the Species
* @param {Number} weight - the mean weight of the Species in lbs
* @param {Number} height - the mean height of the species in feet-inches
* @param {String} diet - the diet type of the Species
*/
function Species(species,weight,height,diet){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

/**
* @class Generic Human Species Class
* @classdesc Class representing the Humans in the web app
* @param {Number} weight - the weight in lbs
* @param {Number} height - the height in feet-inches
* @param {String} diet - the diet type
* @param {String} name - the name of the human
*/
function Humans(weight,height,diet,name){
    Species.call(this,'Human',weight,height,diet);
    this.name = name;
}
Humans.prototype = Object.create(Species.prototype);
Humans.prototype.constructor = Humans;

/**
* @class Generic Dinosaurs Class
* @classdesc Class representing the Dinosaurs in the wep app
* @param {String} species - the name of the Species
* @param {Number} weight - the mean weight of the Species in lbs
* @param {Number} height - the mean height of the species in feet-inches
* @param {String} diet - the diet type of the Species
* @param {String} where - where Species lived
* @param {String} when - the era when the Species lived
* @param {String} fact - principal fact of the Species
*/
function Dinosaurs(species,weight,height,diet,where,when,fact){
    Species.call(this,species,weight,height,diet);
    this.location = where;
    this.era = when;
    this.fact = fact;
}
Dinosaurs.prototype = Object.create(Species.prototype);
Dinosaurs.prototype.constructor = Dinosaurs;
/**
* @description Method to retrieve the location Fact for Dinosaurs
* @return {String} the string fact
*/
Dinosaurs.prototype.getLocationFact = function(){
    return `${this.species} lived in ${this.location}`
}
/**
* @description Method to retrieve the era Fact for Dinosaurs
* @return {String} the string fact
*/
Dinosaurs.prototype.getEraFact = function(){
    return `${this.species} was present in the era ${this.era}`
}
/**
* @description Method to compare the weight with a given Human or another Species
* @param {Humans|Species} item - the Espcies or Human object to compare
* @return {String} the string result of the comparaison
*/
Dinosaurs.prototype.compareWeight = function(item){
    const diff = this.weight - item.weight;
    const name = item instanceof Humans ? item.name  : item.species;
    if(diff > 0) return `${this.species} is heavier than ${name} by ${diff} lbs`;
    if(diff == 0) return `${this.species} have same weight than ${name}`;
    if(diff < 0) return `${this.species} is ligther than ${name} by ${-1*diff} lbs`;
}
/**
* @description Method to compare the height with a given Human or another Species
* @param {Humans|Species} item - the Espcies or Human object to compare
* @return {String} the string result of the comparaison
*/
Dinosaurs.prototype.compareHeight = function(item){

    const diff = this.height - item.height;
    const name = item instanceof Humans ? item.name  : item.species;

    const feets = Math.floor(diff/1);
    const inches = Math.floor((diff % 1)/0.0833333);

    if(diff > 0) return `${this.species} is bigger than ${name} by ${feets}'${inches} feet`;
    if(diff == 0) return `${this.species} have same height than ${name}`;
    if(diff < 0) return `${this.species} is smaller than ${name} by ${feets}'${inches} feet`;
}
/**
* @description Method to compare the diet with a given Human or another Species
* @param {Humans|Species} item - the Espcies or Human object to compare
* @return {String} the string result of the comparaison
*/
Dinosaurs.prototype.compareDiet = function(item){
    const name = item instanceof Humans ? item.name  : item.species;
    if(this.diet === item.diet) return `Both ${this.species} and ${name} have same diet`
    return `${this.species} is ${this.diet} while ${name} is ${item.diet}`
}



/***/ }),

/***/ "./src/client/js/NetworkManager.js":
/*!*****************************************!*\
  !*** ./src/client/js/NetworkManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkManager": () => /* binding */ NetworkManager
/* harmony export */ });
/*--------------------------------------------------------
Dinosaurs Project - NetworkManager Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/

//Improvement of the NetworkManager Module from FrontEnd Nanodegree CAPSTONE project realized before, with the Module Pattern


/**
* @class NetworkManager
* @classdesc Module handling the network request to the server to fetch the data needed for the Web App
*/
var NetworkManager = (function () {
    const getDinosaursPath = '/dinosaurs';
  
    return {
      /**
      * @description Method to use fetch to realize a GET request
      * @param {String} url - The url to realiaze the GET request.
      * @return {Promise<Object>} a promise containing the JSON object 
      */
      getData: async function(url = '') {
          const response = await fetch(url);
          try{
              return response.json();
          }catch(error){
              console.log("error: ",error);
              return {};
          }
      
      },
      /**
      * @description Method fetch the Dinosaurs data from server
      * @return {Promise<Object>} a promise containing the JSON object 
      */
      getDinosaurs: async function(){
          return this.getData(getDinosaursPath);
      }
    };
})();



/***/ }),

/***/ "./src/client/js/TileFactory.js":
/*!**************************************!*\
  !*** ./src/client/js/TileFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileFactory": () => /* binding */ TileFactory
/* harmony export */ });
/* harmony import */ var _FactSpeciesFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FactSpeciesFactory */ "./src/client/js/FactSpeciesFactory.js");
/*--------------------------------------------------------
Dinosaurs Project - TileFactory Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/



/**
* @class Tile Factury Function
* @classdesc Factury Function for the creator of tiles in the infographic
* @param {FactSpeciesFactory} object - the base object for the factory function
*/
function TileFactory(object){
    const image = `images/${object.species}.png`;
    const name = !!object.name ? object.name : object.species;
    

    return Object.assign({}, object, {
        /**
        * @description Method get the image
        * @return {String} the image url path
        */
        getImage: function(){
            return image;
        },
        /**
        * @description Method to retrieve the DOM Element of the tile
        * @param {String} fact - the fact to take into account in the infographic
        * @return {HTMLDivElement} the tile element
        */
        createTile: function(fact){
            let tileElement = document.createElement('div');
            tileElement.classList.add('grid-item');

            let imageElement = document.createElement('img');
            imageElement.setAttribute('src',image);
            imageElement.setAttribute('alt','Species Image');

            let title = document.createElement('h3');
            title.innerHTML = name;

            tileElement.appendChild(title);
            tileElement.appendChild(imageElement);
            if(fact!=undefined){
                let factElement = document.createElement('p');
                factElement.innerHTML = fact;
                tileElement.appendChild(factElement);
            }

            return tileElement;
        }
        
    });
}





/***/ }),

/***/ "./src/client/js/ViewController.js":
/*!*****************************************!*\
  !*** ./src/client/js/ViewController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewController": () => /* binding */ ViewController
/* harmony export */ });
/* harmony import */ var _NetworkManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetworkManager */ "./src/client/js/NetworkManager.js");
/* harmony import */ var _FactSpeciesFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactSpeciesFactory */ "./src/client/js/FactSpeciesFactory.js");
/* harmony import */ var _TileFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileFactory */ "./src/client/js/TileFactory.js");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model */ "./src/client/js/Model.js");
/*--------------------------------------------------------
Dinosaurs Project - ViewController Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/







var ViewController = (function () {
    /** @type {HTMLElement} */
    let formContainer = null;
    /** @type {HTMLElement} */
    let gridContainer = null;
    /** @type {HTMLElement} */
    let buttonElement = null;
    /** @type {HTMLElement} */
    let nameElement = null;
    /** @type {HTMLElement} */
    let heightFeetElement = null;
    /** @type {HTMLElement} */
    let heightInchesElement = null;
    /** @type {HTMLElement} */
    let weightElement = null;
    /** @type {HTMLElement} */
    let dietElement = null;

    /** @type {Humans} */
    let human = null;
    /** @type {Dinosaurs[]} */
    let dinosArray = null;
    
    /** @type {HTMLDivElement[]} */
    let dinoTilesArray = [];
    /** @type {HTMLDivElement} */
    let humanTile = null;
    let currentPage = 1; //1=Form, 2=Infographic


    
    function loadDinosaurs() {
      return _NetworkManager__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.getDinosaurs().then(data =>{
        dinosArray = [];
        for(const item of data){
            const dino = new _Model__WEBPACK_IMPORTED_MODULE_3__.Dinosaurs(item.species,item.weight,item.height,item.diet,item.where,item.when,item.fact);
            dinosArray.push(dino);
        }
        return showInfographic();
      });
    }
    function validateFormData(){
        let errorString = 'The entry data presents the following errors:';
        let isError = false;

        if(!nameElement.value){
            errorString = errorString + '\nThe Name input is empty';
            isError = true;
        }

        if(!weightElement.value){
            errorString = errorString + '\nThe Weight input is empty or null';
            isError = true;
        }else if(parseFloat(weightElement.value) === NaN){
            errorString = errorString + '\nThe Weight input is wrongly filled';
            isError = true;
        }else if(parseFloat(weightElement.value) === 0){
            errorString = errorString + '\nThe Weight input is empty or null';
            isError = true;
        }

        if(!heightFeetElement.value){
            errorString = errorString + '\nThe Feet input is empty or null';
            isError = true;
        }else if(parseFloat(heightFeetElement.value) === NaN){
            errorString = errorString + '\nThe Feet input is wrongly filled';
            isError = true;
        }else if(parseFloat(heightFeetElement.value) === 0){
            errorString = errorString + '\nThe Feet input is empty or null';
            isError = true;
        }

        if(!heightInchesElement.value){
            errorString = errorString + '\nThe Inches input is empty or null';
            isError = true;
        }else if(parseFloat(heightInchesElement.value) === NaN){
            errorString = errorString + '\nThe Inches input is wrongly filled';
            isError = true;
        }else if(parseFloat(heightInchesElement.value) === 0){
            errorString = errorString + '\nThe Inches input is empty or null';
            isError = true;
        }

        if(!dietElement.value){
            errorString = errorString + '\nThe Diet input is empty';
            isError = true;
        }

        if(isError){
            alert(errorString);
            return false;
        }
        return true;
    }
    function loadHuman(){
        const height = parseFloat(heightFeetElement.value) + (0.0833333*parseFloat(heightInchesElement.value));
        human = new _Model__WEBPACK_IMPORTED_MODULE_3__.Humans(parseFloat(weightElement.value),height,dietElement.value,nameElement.value);
    }
    function clearInfographic(){
        gridContainer.innerHTML = '';
        dinoTilesArray = [];
        human = null;
        humanTile=null;
    }
    function clearForm(){
        nameElement.value = '';
        heightFeetElement.value = '';
        heightInchesElement.value = '';
        weightElement.value = '';
        dietElement.selectedIndex = -1;
    }
    function createTiles(){
        const humanFactory = (0,_TileFactory__WEBPACK_IMPORTED_MODULE_2__.TileFactory)((0,_FactSpeciesFactory__WEBPACK_IMPORTED_MODULE_1__.FactSpeciesFactory)(human,null));
        humanTile = humanFactory.createTile(humanFactory.getRandomFact());
        for(const dino of dinosArray){
            const dinoFactory = (0,_TileFactory__WEBPACK_IMPORTED_MODULE_2__.TileFactory)((0,_FactSpeciesFactory__WEBPACK_IMPORTED_MODULE_1__.FactSpeciesFactory)(dino,human));
            dinoTilesArray.push(dinoFactory.createTile(dinoFactory.getRandomFact()));
        }
        console.log(dinoTilesArray);
    }
    function addTiles(){
        for(let index=0;index<9;index++){
            if(index==4){
                gridContainer.appendChild(humanTile);
            }else{
                const randomIndex = Math.floor(Math.random() * dinoTilesArray.length);
                gridContainer.appendChild(dinoTilesArray[randomIndex]);
                dinoTilesArray.splice(randomIndex,1);
                console.log(dinoTilesArray);
            }
        }
    }
  
    function showForm() {
        clearInfographic();
        gridContainer.classList.add('hidden-item');
        formContainer.classList.remove('hidden-item');
    }
    function showInfographic() {
        if(dinosArray==null){
            return loadDinosaurs();
        }
        loadHuman();
        clearForm();
        createTiles();
        addTiles();
        formContainer.classList.add('hidden-item');
        gridContainer.classList.remove('hidden-item');
    }
    function bindDOM(form,grid,button,name,heightFeet,heightInches,weight,diet){
        formContainer = form;
        gridContainer = grid;
        buttonElement = button;
        nameElement = name;
        heightFeetElement = heightFeet;
        heightInchesElement = heightInches;
        weightElement = weight;
        dietElement = diet;
    }
    function togglePage(){
        if(currentPage==1){
          if(validateFormData()){
            currentPage=2;
            showInfographic();
          }  
        }else if(currentPage==2){
            currentPage=1;
            showForm();
        }
    }
  
    return {
     showForm: showForm,
     showInfographic: showInfographic,
     bindDOM: bindDOM,
     togglePage: togglePage
    };
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/client/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map