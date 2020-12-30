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

export {NetworkManager}