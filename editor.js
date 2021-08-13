const file = require('./mockturtle.json')
var fs = require('fs');



file.map((json, idx) => {
    json.country = "India"
    if(idx < 20){
        json.city = "Bangalore"
        json.state = "Karnataka"
    }else if(idx < 40){
        json.city = "Hyderabad"
        json.state = "Telangana"
    }else if(idx < 60){
        json.city = "Chennai"
        json.state = "Tamil Nadu"
    }else if(idx < 80){
        json.city = "Lucknow"
        json.state = "Uttar Pradesh"
    }else if(idx < 90){
        json.city = "Nellore"
        json.state = "Andhra Pradesh"
    }else {
        json.city = "Pune"
        json.state = "Maharashtra"
    }
})

// file.map((json) => {
//     console.log(json.city)
// })

fs.writeFile("modified.json", JSON.stringify(file), function(err) {
    if(err) throw err;
    console.log('complete');
});