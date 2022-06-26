"use strict";
require("./manager");
const events = require("./events");
/////////////////////tookoff///////////////////
setTimeout(function () {
  events.on("new-flight", handleTookoff);
}, 3000);

function handleTookoff(flight) {
  flight.events = "took_off";
//   flight.time=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  console.log(`Pilot: flight with ID ${flight.Details.flightID} took-off`);
  console.log(flight);
}

////////////////arrive/////////////////////////////
setTimeout(function () {
  events.on("new-flight", handleArrive);
}, 4000);

function handleArrive(flight) {
  flight.events = "arrived";

  console.log(`Pilot: flight with ID ${flight.Details.flightID} has arrived`);
  console.log(flight);
  console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pioletName}    `);
}