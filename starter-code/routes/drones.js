/* jshint esversion:6 */
// require express functions
const express = require('express');

// require the Drone model here
const Drones = require('../models/drone');

//require the router of express
const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drones.find({},function(err,drones){
      if (err) return next(err);
      res.render('drones/index',{drones});

    });

  });


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new-drone', {
    title: 'Add a new drone'
  });
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
  //res.send('llegamos a route of guardar drones');
  const body = req.body;
  const newDrone = new Drones(body);
  newDrone.save(function (err, doc) {
    if (err) return next(err);
    res.redirect('/drones');
  });
});


router.get('/drones/:id', (req, res, next) => {
  //res.send('llegamos a route of info drones');
  const droneId=req.params.id;
  Drones.findById(droneId,(err,drone)=>{
    if (err) return next(err);
    res.render('drones/drone',{drone});

  });
  // Iteration #3
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
