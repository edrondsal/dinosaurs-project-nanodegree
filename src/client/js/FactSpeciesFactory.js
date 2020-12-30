/*--------------------------------------------------------
Dinosaurs Project - FactSpeciesFactory Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/

import { Dinosaurs, Species, Humans } from "./Model";

/**
* @class Species Fact Factury Function
* @classdesc Factury Function for Species with aggregates facts
* @param {Species|Dinosaurs|Humans} object - the base object for the factory function
* @param {?Species|Dinosaurs|Humans} compareTo - the nullable object for comparaison
*/
function FactSpeciesFactory(object, compareTo) {
    if(!(object instanceof Species)){
        throw new Error("Can't Factory from an Object which is not instance of Species");
    }
    /** @type {String[]}*/
    let facts = [];

    if(object instanceof Dinosaurs){
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


export {FactSpeciesFactory}