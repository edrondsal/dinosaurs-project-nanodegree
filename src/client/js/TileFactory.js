/*--------------------------------------------------------
Dinosaurs Project - TileFactory Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/

import {FactSpeciesFactory} from './FactSpeciesFactory'

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

export {TileFactory}

