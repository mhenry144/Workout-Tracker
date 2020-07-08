const mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;