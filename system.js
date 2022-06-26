'use strict';
require("./src/manager");
require("./src/pilot")
const events =require("./src/events");

events.on("new-flight",newFlight);
function newFlight(payload){
    // console.log(`Manager: new flight with ID ${payload.Details.flightID} have been scheduled`)
    console.log(payload);
}
events.on('took-off', tookOffFlight);
function tookOffFlight(payload){
    console.log(payload) ; 
}

events.on('arrived', flightArrived);
function flightArrived(payload){
console.log(payload) ;   
}