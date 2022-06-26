'use strict';

const events =require("./events");
const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker');


setInterval(() => {
    let pioletName = faker.name.findName();
    let destination=faker.address.cityName();

    let flight=
    {
        events:"new-flight",
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        Details:{
            airLine: 'RJ Airlines',
            flightID:uuidv4(),
            pioletName:pioletName,
            destination:destination
        },        
    }
    events.emit("new-flight",flight)
}, 10000)