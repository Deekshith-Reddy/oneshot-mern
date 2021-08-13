const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
    id: String,
    name:String,
    founded: Number,
    city: String,
    state: String,
    country: String,
    students: Array,
    courses: Array  
})

module.exports = mongoose.model('colleges', CollegeSchema);

