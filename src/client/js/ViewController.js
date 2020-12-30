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
      return NetworkManager.getDinosaurs().then(data =>{
        dinosArray = [];
        for(const item of data){
            const dino = new Dinosaurs(item.species,item.weight,item.height,item.diet,item.where,item.when,item.fact);
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
        human = new Humans(parseFloat(weightElement.value),height,dietElement.value,nameElement.value);
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
        const humanFactory = TileFactory(FactSpeciesFactory(human,null));
        humanTile = humanFactory.createTile(humanFactory.getRandomFact());
        for(const dino of dinosArray){
            const dinoFactory = TileFactory(FactSpeciesFactory(dino,human));
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

export {ViewController}