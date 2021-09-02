// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  let missionTarget = document.getElementById('missionTarget');
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  if (typeof(testInput) === null || testInput === ''){
    return('Empty');
}
else if (isNaN(Number(testInput))){
    return('Not a Number');
}
else{
    return('Is a Number');
}
}
  //check if the test Input is empty
    // if it is, return 'Empty'
  // check if it's not a number isNaN
    // return 'Not a Number'
  // else
    // return 'Is a Number'

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || fuelLevelValue === 'Empty' || cargoLevelValue === 'Empty') {
    alert("All fields are required!");
    event.preventDefault();
  }
  if (validateInput(fuelLevelValue) === "Not a Number" || validateInput(cargoLevelValue) === "Not a Number"){
    alert("Invalid input. Fuel level and cargo mass must be numbers.");
    event.preventDefault();
}

  // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input


list.style.visibility = 'visible';
const pilotStatus = document.getElementById('pilotStatus');
const copilotStatus = document.getElementById('copilotStatus');
const fuelStatus = document.getElementById('fuelStatus');
const cargoStatus = document.getElementById('cargoStatus');
const launchStatus = document.getElementById('launchStatus');
pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
  // set the list.style.visibility = 'visible'
copilotStatus.innerHTML = `Co-pilot ${copilotValue} is ready for launch`;
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`

  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"
  if (fuelLevelValue < 10000) {
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    launchStatus.style.color = 'rgb(199, 37, 78)';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
}

if (cargoLevelValue >= 10000){
  launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
  launchStatus.style.color = 'rgb(199, 37, 78)';
  cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
}

if (fuelLevelValue >= 10000 && cargoLevelValue < 10000){
  fuelStatus.innerHTML = 'Fuel level high enough for launch';
  cargoStatus.innerHTML = 'Cargo mass low enough for launch';
  launchStatus.innerHTML = 'Shuttle is Ready for Launch';
  launchStatus.style.color = 'rgb(65, 159, 106)';
}
  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
}

async function myFetch() {
  let planetsResponse;
  planetsResponse = await fetch('https://handlers.education.launchcode.org/static/planets.json');
  jsonResponse = await planetsResponse.json();
  /*.then(function(response) {
      // get the json from the response
      return response.json();
})
      .then(function(json) {
        console.log(json);
        return json;
      });*/

    return jsonResponse;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
  let index = Math.floor(Math.random()*planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
