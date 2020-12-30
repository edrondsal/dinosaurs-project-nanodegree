/*--------------------------------------------------------
Dinosaurs Project - ViewController Module - Udacity Nanodegree
version: 1.0.0
created on: 30/12/20
last modified: 30/12/20
Updates:
30/12/20   File Creation
author: E. RONDON
----------------------------------------------------------*/

import {NetworkManager} from './NetworkManager'
import {FactSpeciesFactory} from './FactSpeciesFactory'
import {TileFactory} from './TileFactory'
import { Dinosaurs, Humans } from "./Model";

/**
* @class ViewController
* @classdesc Module handling the logic of the Web App
*/
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


    /**
    * @description Method to load the dinosaurs data when required
    */
    function loadDinosaurs() {
      return NetworkManager.getDinosaurs().then(data =>{
        dinosArray = [];
        for(const item of data){
            const dino = new Dinosaurs(item.species,item.weight,item.height,item.diet,item.where,item.when,item.fact);
            dinosArray.push(dino);
        }
        return showInfographic();
      });
    }
    /**
    * @description Method to validate the form data
    * @return {Boolean} TRUE when all data is correctly validated
    */    
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
    /**
    * @description Method to create the human object after data validation
    */
    function loadHuman(){
        const height = parseFloat(heightFeetElement.value) + (0.0833333*parseFloat(heightInchesElement.value));
        human = new Humans(parseFloat(weightElement.value),height,dietElement.value,nameElement.value);
    }
    /**
    * @description Method to clear the infographic and all data
    */
    function clearInfographic(){
        gridContainer.innerHTML = '';
        dinoTilesArray = [];
        human = null;
        humanTile=null;
    }
    /**
    * @description Method to clear the form for data input
    */
    function clearForm(){
        nameElement.value = '';
        heightFeetElement.value = '';
        heightInchesElement.value = '';
        weightElement.value = '';
        dietElement.selectedIndex = -1;
    }
    /**
    * @description Method to create the tiles of the infographic
    */
    function createTiles(){
        const humanFactory = TileFactory(FactSpeciesFactory(human,null));
        humanTile = humanFactory.createTile(humanFactory.getRandomFact());
        for(const dino of dinosArray){
            const dinoFactory = TileFactory(FactSpeciesFactory(dino,human));
            dinoTilesArray.push(dinoFactory.createTile(dinoFactory.getRandomFact()));
        }
        console.log(dinoTilesArray);
    }
    /**
    * @description Method to add randomly the tiles to the grid container
    */
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
  
    /**
    * @description Method to show the form to the view
    */
    function showForm() {
        clearInfographic();
        gridContainer.classList.add('hidden-item');
        formContainer.classList.remove('hidden-item');
    }
    /**
    * @description Method to show the infographic to the view
    */
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
    /**
    * @description Method to bind the view to the view controller
    */
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
    /**
    * @description Method to toggle between the Form and the Infographic
    */
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

export {ViewController}