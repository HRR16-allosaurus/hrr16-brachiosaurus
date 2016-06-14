const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db/');
const controller = require('./db2/workoutController.js');
const path = require('path');
//stripe authenication
//change to production key later!!!
const stripe = require('stripe')('sk_test_wSTxvrFX0Wo8oyxlfea05lPu');
const StripeCharge = require('./stripe/StripeCharge');

app.use(express.static(`${__dirname}/../client/build`));
app.use(parser.json());

// API
app.post('/new_workout', controller.addWorkout);
app.get('/new_workout', controller.getWorkouts);
app.put('/new_workout', controller.updateWorkout);

app.get('/api/workouts', (req, res) => db.helpers.getVal(db.ref.workouts, res));
app.get('/api/workouts/easy', (req, res) => db.helpers.getVal(db.ref.workoutEasy, res));
app.get('/api/workouts/normal', (req, res) => db.helpers.getVal(db.ref.workoutNormal, res));
app.get('/api/workouts/hard', (req, res) => db.helpers.getVal(db.ref.workoutHard, res));
app.get('/api/workouts/weightloss', (req, res) => db.helpers.getVal(db.ref.weightloss, res));
app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/../client/build/index.html`)));




// Stripe routing and charge
app.post('/stripe', (req, res) => {
    console.log(req.body.token)
    StripeCharge(req.body.token,function(err, charge){
      if(err) {
        console.log('Payment Declined');
         var response = {
          status  : 400,
          error : 'Payment Declined'
        }
        res.end(JSON.stringify(response));

    }
      else {
        console.log('Payment Recieved');
        var response = {
          status  : 200,
          success : 'Payment Recieved'
        }
        res.end(JSON.stringify(response));
        
      }
    },stripe);
});

app.listen(port, () => console.log('Server running on port ' + port));

module.exports = app;
