const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db/');
const path = require('path');
app.use(express.static(`${__dirname}/../client/build`));
app.use(parser.json());

// API
app.get('/api/workouts', (req, res) => db.helpers.getVal(db.ref.workouts, res));
app.get('/api/workouts/easy', (req, res) => db.helpers.getVal(db.ref.workoutEasy, res));
app.get('/api/workouts/normal', (req, res) => db.helpers.getVal(db.ref.workoutNormal, res));
app.get('/api/workouts/hard', (req, res) => db.helpers.getVal(db.ref.workoutHard, res));
app.get('/api/workouts/weightloss', (req, res) => db.helpers.getVal(db.ref.weightloss, res));
app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/../client/build/index.html`)));

app.listen(port, () => console.log('Server running on port 3000!'));
module.exports = app;
