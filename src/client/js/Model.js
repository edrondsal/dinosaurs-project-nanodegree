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
    const name = item instanceof Humans ? name  : item.Species;
    if(diff > 0) return `${this.Species} is heavier than ${name} by ${diff} lbs`;
    if(diff == 0) return `${this.Species} have same weight than ${name}`;
    if(diff < 0) return `${this.Species} is ligther than ${name} by ${-1*diff} lbs`;
}
/**
* @description Method to compare the height with a given Human or another Species
* @param {Humans|Species} item - the Espcies or Human object to compare
* @return {String} the string result of the comparaison
*/
Dinosaurs.prototype.compareHeight = function(item){
    const diff = this.height - item.height;
    const name = item instanceof Humans ? name  : item.Species;
    if(diff > 0) return `${this.Species} is bigger than ${name} by ${diff} inches`;
    if(diff == 0) return `${this.Species} have same height than ${name}`;
    if(diff < 0) return `${this.Species} is smaller than ${name} by ${-1*diff} inches`;
}
/**
* @description Method to compare the diet with a given Human or another Species
* @param {Humans|Species} item - the Espcies or Human object to compare
* @return {String} the string result of the comparaison
*/
Dinosaurs.prototype.compareDiet = function(item){
    const name = item instanceof Humans ? name  : item.Species;
    if(this.diet === item.diet) return `Both ${this.Species} and ${name} have same diet`
    return `${this.Species} is ${this.diet} while ${name} is ${item.diet}`
}

export { Species,Dinosaurs,Humans }