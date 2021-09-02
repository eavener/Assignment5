// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanetsResponse = myFetch().then(function (response){
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //  const planet = pickPlanet(listedPlanets)
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
let listedPlanets = response;
   const planet = pickPlanet(listedPlanets);
   addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

    let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       const pilotValue = pilotNameInput.value;
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       const copilotValue = copilotNameInput.value;
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       const fuelValue = fuelLevelInput.value;
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       const cargoValue = cargoMassInput.value;
    /*    if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
           alert("All fields are required!");
    }*/

    let list = document.getElementById('faultyItems');
    formSubmission(document, list, pilotValue, copilotValue, fuelValue, cargoValue);
});
   // get the form
   // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
      // get the value for each of the input field
      // let pilotInput = this.document.querySelector("input[name=pilotName]");
      // const pilotValue = pilotInput.value

      // let list = document.getElementById('faultyItems');
      // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)


});