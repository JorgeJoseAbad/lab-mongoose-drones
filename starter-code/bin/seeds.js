/* jshint esversion:6 */

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');  //Drone is a Model, based on Schema drone

// bin/seeds.js
//from the nongoose API: Model.create(doc(s), [callback])
//Shortcut for saving one or more documents to the database.
Drone.create(droneData, (err, docs) => {
  if (err) { throw err; }
  docs.forEach( (docs) => {
    console.log(docs.droneName);
  });
  mongoose.connection.close();
});
