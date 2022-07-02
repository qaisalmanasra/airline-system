"user strict";

require('dotenv').config();

const io = require('socket.io-client');
const socket=io.connect(`http://localhost:${process.env.PORT}`);

let host = `http://localhost:${process.env.PORT}/airline`;
const airlineSystem = io.connect(host);
const { faker } = require('@faker-js/faker');
const flightId = faker.datatype.uuid();

setInterval(() => {
    let NewFlight = `Manager: New Fligh Number:${flightId}`;
    console.log(NewFlight);
    airlineSystem.emit('new-flight', NewFlight);
    socket.emit('new-flight', NewFlight);
}, 10000);

socket.on('Arrived', manager2);
function manager2() {
    console.log(`Flight ${flightId} has arrived`);
}