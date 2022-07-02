'use strict';
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const ioServer = require('socket.io')(PORT);
const { faker } = require('@faker-js/faker');
const airline = 'Royal Jordanian Airlines';
const flightId = faker.datatype.uuid();
const pilotName = faker.name.findName();
const destination = faker.address.cityName();

const queue = {
  flights: {}
};

const airlineSystem = ioServer.of('/airline');

airlineSystem.on('connection', (socket) => {
    console.log('connected to airline ', socket.id);
    socket.on('new-flight', () => {
      airlineSystem.emit('took-off', tookOffFlight);
    });
});

ioServer.on('connection', (socket) => {
  console.log('connected to server', socket.id);

  socket.on('new-flight', (payload) => {
    NewFlight();
    airlineSystem.emit('new-flight');
    const id = faker.datatype.uuid();
    queue.flights[id] = payload;
  });

  socket.on('Arrived', flightArrived);
  socket.on('Arrived', (payload) => {
    airlineSystem.emit('Arrived');
    console.log(payload);
  });
  socket.on('get-all', () => {
    socket.emit('flight', queue.flights);
    queue.flights = {};
  });
});

function NewFlight() {
  let NewFlight = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot:pilotName,
        destination:destination,
      },
    },
  };
  console.log(NewFlight);
}
function tookOffFlight() {
  let NewFlight = {
    Flight: {
      event: 'took_off',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot: pilotName,
        destination: destination,
      },
    },
  };
  console.log(NewFlight);
 
}
function flightArrived() {
  let arrive = {
    Flight: {
      event: 'arrived',
      time: faker.date.past(),
      Details: {
        airLine: airline,
        flightID: flightId,
        pilot: pilotName,
        destination: destination,
      },
    },
  };
  console.log(arrive);
}