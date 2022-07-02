'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const socket = io.connect(`http://localhost:${process.env.PORT}`)
let host = `http://localhost:${process.env.PORT}/airline`;
const airlineSystem = io.connect(host);
const { faker } = require('@faker-js/faker');
const flightId = faker.datatype.uuid();
socket.emit('get-all');
airlineSystem.emit('get-all');
airlineSystem.on('new-flight', pilot);

function pilot() {
  setTimeout(() => {
    let tookoffAlert = `flight number ${flightId} Just took-off`;
    console.log(tookoffAlert);
    socket.emit('took-off', tookoffAlert);
  }, 3000);

  setTimeout(() => {
    let arriveAlert = `flight number ${flightId} has arrived to destination`;
    console.log(arriveAlert);
    socket.emit('Arrived', arriveAlert);
  }, 4000);

}